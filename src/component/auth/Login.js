import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'
import { signInWithGoogle } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../../styles/images/logo.svg'

class Login extends Component {

    handleGmail = (e) => {
        e.preventDefault();
        this.props.signInWithGoogle()
    }

    render() {
      
        const { authError, auth } = this.props  
        if(auth.uid) { return <Redirect to='/home' /> }

        return (
            <section className='cc_login'>

                <div className='cc_login_area'>                
                    <Row className='cc_login_row'>
                        <Col md={12}>
                            <div className='cc_info_btn'>                                
                                    <i className="material-icons">trending_flat</i>
                                    <span>Contact</span>
                            </div>  
                            <img src={logo} alt='camera collection'/>
                            <div className='cc_login_btn' onClick={this.handleGmail}>
                                    <span>Sign In</span>
                                    <i className="material-icons">trending_flat</i>
                            </div>  
                        </Col>                        
                    </Row>
                </div>

            </section>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signInWithGoogle: () => dispatch(signInWithGoogle())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login)