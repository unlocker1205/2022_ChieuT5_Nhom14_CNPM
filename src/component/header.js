import React, {useEffect, useState} from 'react';
import '../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faClipboardCheck, faLaptop, faSearch } from '@fortawesome/free-solid-svg-icons'
import LoginScreen from "./login-screen";
import ForgotScreen from "./forgot-screen";
import Register from "./register";
import NotifySuccessScreen from "./notify-success-screen";
import NotifyFailScreen from "./notify-fail-screen";
import VerificationScreen from "./verification-screen";
import NewPassScreen from "./new-pass-screen";

const Header = () => {
    const[currentComponent, setCurrentComponent] = useState(0)

    // if (count === 1) {
        const btnLogin = document.querySelector('.js-btn-login')
        const loginForm = document.querySelector('.js-login')
        const loginContainer = document.querySelector('.js-login-container')

        // const btnForgot = document.querySelector('.js-forgot-pass')
        const forgotForm = document.querySelector('.js-forgot')
        const forgotContainer = document.querySelector('.js-forgot-container')
        const btnComeback = document.querySelector('.js-come-back')
        // const btnFindAccount = document.querySelector('.js-find-account')

        const closeIcon = document.querySelector('.js-close-icon')
        const registerForm = document.querySelector('.js-register')
        const registerContainer = document.querySelector('.js-register-container')
        const btnNewAccount = document.querySelector('.js-new-account')

        const notifySuccessForm = document.querySelector('.js-notify-success')
        const notifySuccessContainer = document.querySelector('.js-notify-success-container')
        // const btnOKSuccess = document.querySelector('.btn-OK-success')

        const notifyFailForm = document.querySelector('.js-notify-fail')
        const notifyFailContainer = document.querySelector('.js-notify-fail-container')
        // const btnOKFail = document.querySelector('.btn-OK-fail')

        const verificationForm = document.querySelector('.js-verification')
        const verificationContainer = document.querySelector('.js-verification-container')
        // const btnOKVerification = document.querySelector('.btn-OK-verification')

        const newPassForm = document.querySelector('.js-new-pass')
        const newPassContainer = document.querySelector('.js-new-pass-container')
        // const btnOKNewPass = document.querySelector('.btn-new-pass')


        function showRegister() {
            registerForm.classList.add('open')
            if (registerContainer) {
                registerContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeRegister() {
            registerForm.classList.remove('open')
        }

        function showNewPass() {
            setCurrentComponent(3)
            newPassForm.classList.add('open')
            if (newPassContainer) {
                newPassContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeNewPass() {
            newPassForm.classList.remove('open')
        }

        function showNotifySuccess() {
            notifySuccessForm.classList.add('open')
            if (notifySuccessContainer) {
                notifySuccessContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeNotifySuccess() {
            notifySuccessForm.classList.remove('open')
        }

        function showVerification() {
            setCurrentComponent(2)
            verificationForm.classList.add('open')
            if (verificationContainer) {
                verificationContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeVerification() {
            verificationForm.classList.remove('open')
        }

        function showNotifyFail() {
            notifyFailForm.classList.add('open')
            if (notifyFailContainer) {
                notifyFailContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeNotifyFail() {
            notifyFailForm.classList.remove('open')
        }

        function showLogin() {
            loginForm.classList.add('open')
        }

        function closeLogin() {
            loginForm.classList.remove('open')
        }

        function showForgot() {
            setCurrentComponent(1)
            forgotForm.classList.add('open')
            if (forgotContainer) {
                forgotContainer.addEventListener('click', function (event) {
                    event.stopPropagation()
                })
            }
        }

        function closeForgot() {
            forgotForm.classList.remove('open')
        }

        if (btnLogin) {
            btnLogin.addEventListener('click', showLogin)
        }
        if (loginForm) {
            loginForm.addEventListener('click', closeLogin)
        }
        if (loginContainer) {
            loginContainer.addEventListener('click', function (event) {
                event.stopPropagation()
            })
        }

        // if (btnForgot) {
        //     btnForgot.addEventListener('click', closeLogin)
        //     btnForgot.addEventListener('click', showForgot)
        // }
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

        // if (btnFindAccount) {
        //     if (true) {
        //         btnFindAccount.addEventListener('click', closeForgot)
        //         btnFindAccount.addEventListener('click', showNotifySuccess)
        //     } else {
        //         btnFindAccount.addEventListener('click', showNotifyFail)
        //     }
        // }

        // if (btnOKVerification) {
        //     if (true) {
        //         btnOKVerification.addEventListener('click', closeVerification)
        //         btnOKVerification.addEventListener('click', showNotifySuccess)
        //     } else {
        //         btnOKVerification.addEventListener('click', showNotifyFail)
        //     }
        // }

        // if (btnOKNewPass) {
        //     if (true) {
        //         btnOKNewPass.addEventListener('click', closeNewPass)
        //         btnOKNewPass.addEventListener('click', showNotifySuccess)
        //     } else {
        //         btnOKNewPass.addEventListener('click', showNotifyFail)
        //     }
        // }


        if (closeIcon) {
            closeIcon.addEventListener('click', closeRegister)
        }

        // if (btnOKSuccess) {
        //     switch (currentComponent) {
        //         case 1:
        //             btnOKSuccess.addEventListener('click', showVerification)
        //             break
        //         case 2:
        //             btnOKSuccess.addEventListener('click', closeVerification)
        //             btnOKSuccess.addEventListener('click', showNewPass)
        //             break
        //         case 3:
        //             btnOKSuccess.addEventListener('click', closeNewPass)
        //             break
        //     }
        //     btnOKSuccess.addEventListener('click', closeNotifySuccess)
        // }

        // if (btnOKFail) {
        //     btnOKFail.addEventListener('click', closeNotifyFail)
        // }
    // }
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
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
                <div id="header-list-id" className="header_list">
                    <ul className="header_list-item">
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/product">
                                <FontAwesomeIcon className="hover-header1" icon={faLaptop} />Sản phẩm
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/tutorial">
                                <FontAwesomeIcon className="hover-header1" icon={faClipboardCheck} />Hướng dẫn
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/about-us">
                                {/*                        <i class="hover-header1 fas fa-bell"></i>*/}
                                <FontAwesomeIcon className="hover-header1" icon={faUser} />Thông tin
                            </a>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header" href="/cart">
                                <FontAwesomeIcon className="hover-header1" icon={faCartShopping} />Giỏ hàng
                            </a>
                            <div id="icon-cart" className="icon-cart"/>
                        </li>
                        <li className="header_sub-list">
                            <a className="font-14 hover-header js-btn-login" role="button">
                                <FontAwesomeIcon className="hover-header1" icon={faUser} />Đăng nhập
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
            <LoginScreen closeLogin={closeLogin} showForgot={showForgot}/>
            <ForgotScreen closeForgot={closeForgot} showNotifySuccess={showNotifySuccess} showNotifyFail={showNotifyFail}/>
            <Register/>
            <NotifySuccessScreen closeNotifySuccess={closeNotifySuccess} closeNewPass={closeNewPass} closeVerification={closeVerification} currentComponent={currentComponent} showNewPass={showNewPass} showVerification={showVerification}/>
            <NotifyFailScreen closeNotifyFail={closeNotifyFail}/>
            <VerificationScreen closeVerification={closeVerification} showNotifyFail={showNotifyFail} showNotifySuccess={showNotifySuccess} />
            <NewPassScreen showNotifySuccess={showNotifySuccess} showNotifyFail={showNotifyFail} closeNewPass={closeNewPass} />
        </>
    );
};

export default Header;