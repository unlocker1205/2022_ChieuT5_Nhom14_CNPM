import React, {useEffect, useState} from 'react';
import '../css/style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faClipboardCheck, faLaptop, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import LoginScreen from "./LoginScreen";
import ForgotScreen from "./ForgotScreen";
import Register from "./register";
import NotifySuccessScreen from "./NotifySuccessScreen";
import NotifyFailScreen from "./NotifyFailScreen";
import VerificationScreen from "./VerificationScreen";
import NewPassScreen from "./NewPassScreen";

const Header = () => {
    const [currentComponent, setCurrentComponent] = useState(0)
    const [forgot, setForgot] = useState(false)
    const [verification, setVerification] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)


    function showRegister() {
        setRegister(true)
    }

    function closeRegister() {
        setRegister(false)
    }

    function showNewPass() {
        setNewPass(true)
        setCurrentComponent(3)
    }

    function closeNewPass() {
        setNewPass(false)
    }

    function showNotifySuccess() {
        setSuccess(true)
    }

    function closeNotifySuccess() {
        setSuccess(false)
    }

    function showVerification() {
        setVerification(true)
        setCurrentComponent(2)
    }

    function closeVerification() {
        setVerification(false)
    }

    function showNotifyFail() {
        setFail(true)
    }

    function closeNotifyFail() {
        setFail(false)
    }

    function showLogin() {
        setLogin(true)
    }

    function closeLogin() {
        setLogin(false)
    }

    function showForgot() {
        setForgot(true)
        setCurrentComponent(1)
    }

    function closeForgot() {
        setForgot(false)
    }

    function clickButtonLogin() {
        showLogin()
    }

    useEffect(function () {
        const btnLogin = document.querySelector('.js-btn-login')
        const loginForm = document.querySelector('.js-login')
        const forgotForm = document.querySelector('.js-forgot')
        const btnComeback = document.querySelector('.js-come-back')
        const closeIcon = document.querySelector('.js-close-icon')
        const btnNewAccount = document.querySelector('.js-new-account')

        // clickButtonLogin(btnLogin)

        if (loginForm) {
            loginForm.addEventListener('click', closeLogin)
        }

        if (forgotForm) {
            forgotForm.addEventListener('click', closeForgot)
        }

        if (btnComeback) {
            btnComeback.addEventListener('click', closeForgot)
            btnComeback.addEventListener('click', showLogin)
        }

        if (btnNewAccount) {
            btnNewAccount.addEventListener('click', showRegister)
            btnNewAccount.addEventListener('click', closeLogin)
        }

        if (closeIcon) {
            closeIcon.addEventListener('click', closeRegister)
        }
    }, [])



    return (
        <>
            <div id="header">
                <a href="/">
                    <div className="header_logo">
                    </div>
                </a>
                <form action className="header_search">
                    <div className="search">
                        <input type="text" required placeholder="Nhập từ khóa cần tìm kiếm ..."
                               className="header_input-search"/>
                        <button role="button" className="header_btn-search">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </form>
                <div id="header-list-id" className="header_list">
                    <ul className="header_list-item">
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/product">
                                <FontAwesomeIcon className="hover-header1" icon={faLaptop}/>Sản phẩm
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/tutorial">
                                <FontAwesomeIcon className="hover-header1" icon={faClipboardCheck}/>Hướng dẫn
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/about-us">
                                {/*                        <i class="hover-header1 fas fa-bell"></i>*/}
                                <FontAwesomeIcon className="hover-header1" icon={faUser}/>Thông tin
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/cart">
                                <FontAwesomeIcon className="hover-header1" icon={faCartShopping}/>Giỏ hàng
                            </a>
                            <div id="icon-cart" className="icon-cart"/>
                        </li>
                        <li className="header_sub-list">
                            <a onClick={clickButtonLogin} className="font-14 hover-header js-btn-login" role="button">
                                <FontAwesomeIcon className="hover-header1" icon={faUser}/>Đăng nhập
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="mobile-menu" className="menu-mobile-class">
                    <i className="menu-mobile-btn ti-menu"/>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"/>
                </div>
            </div>
            {login && <LoginScreen closeLogin={closeLogin} showForgot={showForgot}/>}
            {forgot && <ForgotScreen closeForgot={closeForgot} showNotifySuccess={showNotifySuccess}
                                     showNotifyFail={showNotifyFail}/>}
            {register && <Register/>}
            {success && <NotifySuccessScreen closeNotifySuccess={closeNotifySuccess} closeNewPass={closeNewPass}
                                             closeVerification={closeVerification} currentComponent={currentComponent}
                                             showNewPass={showNewPass} showVerification={showVerification}/>}
            {fail && <NotifyFailScreen closeNotifyFail={closeNotifyFail}/>}
            {verification &&  <VerificationScreen closeVerification={closeVerification} showNotifyFail={showNotifyFail}
                                                  showNotifySuccess={showNotifySuccess}/>}
            {newPass && <NewPassScreen showNotifySuccess={showNotifySuccess} showNotifyFail={showNotifyFail}
                                       closeNewPass={closeNewPass}/>}
        </>
    );
};

export default Header;