import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Navbar from '../elements/navbar'
import Carousel from '../elements/carousel'

class Dashboard extends Component {
    
    render() {      
        const { auth } = this.props
        if(!auth.uid) { return <Redirect to='/' /> }

        return (
            <section className='cc_dashboard'>
                <Navbar/>
                <Carousel/>




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

export default connect(mapStateToProps, null)(Dashboard)