import React, {Component} from 'react'
import { Row , Col} from 'react-bootstrap'

import logo from '../../styles/images/logo.svg'
import teste from '../../styles/images/teste.png'

class carousel extends Component {    

    render() {       

        
        
        return (
            <Row className='cc_carousel'>
                <Col md={9} className='cc_carousel_img'>
                    <img src={teste} />
                    <ul className='cc_carousel_btn'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </Col>
                <Col md={3} className='cc_carousel_name'>
                    <img src={logo} açt='logo'/>
                    <Row>
                        <Col md={2} className='cc_carousel_arrow'><i className="material-icons">arrow_back</i></Col>
                        <Col md={8}>Marry Poppings</Col>
                        <Col md={2} className='cc_carousel_arrow'><i className="material-icons">arrow_forward</i></Col>
                    </Row>
                </Col>
            </Row>            
        )
    }
}


 export default (carousel)