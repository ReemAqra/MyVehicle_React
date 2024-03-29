import React, {Component} from 'react';
import Logo from './MM_Logo.jpeg'
import {MdReportGmailerrorred} from 'react-icons/md';
class Error extends Component {
    render() {
        return (
            <section className={'mb-5'}>
                <img className="justify-content-center mt-5 m-auto d-grid"
                    width='20%' src={Logo} alt={'error'}/>
                <h1 style={{fontSize:'30px',color:'#030756dd'}}
                    className= ' m-auto justify-content-center mt-5 d-flex p-4 '>
                    <i className='me-2 '><MdReportGmailerrorred /></i>Page Not Found<i className='ms-2 '><MdReportGmailerrorred /></i></h1>
            </section>
        );
    }
}

export default Error;