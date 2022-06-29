import React, {useEffect} from 'react';
import '../css/account.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    useEffect(function () {
        const registerContainer = document.querySelector('.js-register-container')

        registerContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    }, [])
    return (
        <>
            <div className="js-register" id="register-main" style={{zIndex: 1000}}>
                <div className="register js-register-container">
                    <div className="title-register">
                        <a className="close-register js-close-icon" role="button"><FontAwesomeIcon icon={faTimes}/></a>
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Đăng kí</h1>
                        <p className="slogan-register">Nhanh chóng và dễ dàng</p>
                    </div>
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                            <input className="input-items" placeholder="Họ và tên" required type="text"/>
                            <input className="input-items" placeholder="Tên đăng nhập" required type="text"/>
                            <input className="input-items" placeholder="Mật khẩu mới" required type="password"/>
                            <input className="input-items" placeholder="Địa chỉ nhận hàng" required type="password"/>
                            <input className="input-items" placeholder="Email liên hệ" required type="password"/>
                        </div>
                        <div className="register-div">
                            <a className="btn-register" role="button">Đăng kí</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;