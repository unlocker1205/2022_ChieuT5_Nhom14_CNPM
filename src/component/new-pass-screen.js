import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import NotifySuccessScreen from "./notify-success-screen";
import NotifyFailScreen from "./notify-fail-screen";
import LoginScreen from "./login-screen";
import ForgotScreen from "./forgot-screen";
import Register from "./register";
import VerificationScreen from "./verification-screen";

const NewPassScreen = ({closeNewPass, showNotifySuccess, showNotifyFail}) => {
    const btnOKNewPass = document.querySelector('.btn-new-pass')

    if (btnOKNewPass) {
        if (true) {
            btnOKNewPass.addEventListener('click', closeNewPass)
            btnOKNewPass.addEventListener('click', showNotifySuccess)
        } else {
            btnOKNewPass.addEventListener('click', showNotifyFail)
        }
    }

    return (
        <>
            <div className="js-new-pass" id="new-pass-main" style={{zIndex: 1000}}>
                <div className="register js-new-pass-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Mật khẩu mới</h1>
                        <p className="slogan-register">Nhập và xác nhận mật khẩu mới</p>
                    </div>
                    <div className="border" />
                    <form action className="register-form">
                        <div className="input-register">
                            <input className="input-items" placeholder="Mật khẩu mới" required type="password" />
                            <input className="input-items" placeholder="Nhập lại mật khẩu mới" required type="password" />
                        </div>
                        <div className="register-div">
                            <a className="btn-register btn-new-pass" role="button">Xác nhận</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassScreen;