import React, {Component} from 'react'
import { Row , Col} from 'react-bootstrap'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import logo from '../../styles/images/logo.svg'

class carousel extends Component {    

    state = {
        fn: 0,
        sn: 1,
    }

    componentWillMount() {
        this.handleAnimation();
    }

    handleAnimation = () => {
        setInterval(() => {
            this.handleNext()
        }, 8000)
    }

    handleChange = (e) => {
        const value = e.target.value

        switch(value) {
            case 1: 
                this.setState({fn: 0, sn: 1})
                break;
            case 2:
                this.setState({fn: 1, sn: 2})
                break;
            case 3:
                this.setState({fn: 2, sn: 3})
                break;
            case 4:
                this.setState({fn: 3, sn: 4})
                break;
            default:
                break
        }

    }

    handleNext = (e) => {
        const {fn , sn} = this.state
        const nextFn = fn + 1;
        const nextSn = sn + 1
        
        if((nextFn === 3 || nextFn < 3) && (nextSn === 4 || nextSn < 4)) {            
            this.setState({fn: nextFn, sn: nextSn})
        } else {
            this.setState({fn: 0, sn: 1})
        }
    }

    handlePrev = (e) => {
        const {fn , sn} = this.state
        const prevFn = fn - 1;
        const prevSn = sn - 1
        if((prevFn === 0 || prevFn > 0) && (prevSn === 1 || prevSn > 1)) {            
            this.setState({fn: prevFn, sn: prevSn})
        } else {
            this.setState({fn: 3, sn: 4})
        }
    }

     render() {       
        
        const { movie } = this.props
        const { fn , sn } = this.state

                    
        return (
            <section className='carousel'>    

                {
                      movie && movie.slice(fn,sn).map(item => {
                        return (
                            <Row className='cc_carousel'>
                                <Col md={9} className='cc_carousel_img' style={{backgroundImage: `url(${item.banner})`}}>
                                    <ul className='cc_carousel_btn'>
                                        <li onClick={this.handleChange} id={(this.state.sn === 1) ? "active" : ""} name='1' value='1'>1</li>
                                        <li onClick={this.handleChange} id={(this.state.sn === 2) ? "active" : ""} name='2' value='2'>2</li>
                                        <li onClick={this.handleChange} id={(this.state.sn === 3) ? "active" : ""} name='3' value='3'>3</li>
                                        <li onClick={this.handleChange} id={(this.state.sn === 4) ? "active" : ""}  name='4' value='4'>4</li>
                                    </ul>
                                </Col>
                                <Col md={3} className='cc_carousel_name'>
                                    <img src={logo} alt='logo'/>
                                    <Row>
                                        <Col md={2} className='cc_carousel_arrow' onClick={this.handlePrev}>
                                            <i className="material-icons">arrow_back</i>
                                        </Col>
                                        <Col md={8}>{item.name}</Col>
                                        <Col md={2} className='cc_carousel_arrow' onClick={this.handleNext}>
                                            <i className="material-icons">arrow_forward</i>
                                        </Col>
                                    </Row>
                                </Col>         
                            </Row>          
                        )
                      })   
                } 
                   
            </section>
        )
    }
}



const mapStateToProps = (state) => {
    
    console.log(state.firestore)
    return {
        movie: state.firestore.ordered.movie
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([ { collection: 'movie' } ])
)(carousel)