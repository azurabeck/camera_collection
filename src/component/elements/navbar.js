import React, {Component} from 'react'
import { Row , Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import logo from '../../styles/images/logo_white.svg'

class navbar extends Component {    
    render() {             
        return (
            <Row className='cc_navbar'>
                <Col md={2}><img src={logo} alt='logo'/></Col>
                <Col md={10} className='cc_navbar_menu'>
                    <ul>
                        <li>Categorias</li>
                        <li>Contato</li>
                        <li>Download</li>
                        <li><i className="material-icons">search</i></li>
                        <li><i className="material-icons">how_to_reg</i></li>
                        <a onClick={this.props.signOut} href='/'><i className="material-icons">power_settings_new</i></a>
                    </ul>
                </Col>
            </Row>            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
 }

 export default connect(null, mapDispatchToProps)(navbar)