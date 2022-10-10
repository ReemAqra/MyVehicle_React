import React, {Component} from 'react';
import Logo from './MM_Logo.jpeg'
import {MdReportGmailerrorred} from 'react-icons/md';
class Error extends Component {
    render() {
        return (
            <div>
                <img className="justify-content-center mt-5 m-auto d-grid"
                    width='50%' src={Logo}/>
                <h1 style={{fontSize:'30px',color:'#030756dd'}}
                    className=' m-auto justify-content-center mt-5 d-flex p-4 '>
                    <i className='me-2 '><MdReportGmailerrorred /></i>Page Not Found<i className='ms-2 '><MdReportGmailerrorred /></i></h1>
            </div>
        );
    }
}

export default Error;