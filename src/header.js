// import {useState} from 'react'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const {id, name} = location.state;

    return (
        <div>
            Id is {id} <br/>
            Name is {name} <br/>
            <h1>this is header</h1>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <button onClick={() => navigate('/')}></button>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
            
        </div>
    );
}

export default Header;
