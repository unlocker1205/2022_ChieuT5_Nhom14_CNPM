import React from 'react';
import NotifySuccessScreen from "./notify-success-screen";
import NotifyFailScreen from "./notify-fail-screen";
import LoginScreen from "./login-screen";
import ForgotScreen from "./forgot-screen";
import Register from "./register";
import NewPassScreen from "./new-pass-screen";

const VerificationScreen = ({closeVerification, showNotifySuccess, showNotifyFail}) => {
    const btnOKVerification = document.querySelector('.btn-OK-verification')

    if (btnOKVerification) {
        if (true) {
            btnOKVerification.addEventListener('click', closeVerification)
            btnOKVerification.addEventListener('click', showNotifySuccess)
        } else {
            btnOKVerification.addEventListener('click', showNotifyFail)
        }
    }
    return (
        <>
            <div className="js-verification" id="verification-main" style={{zIndex: 1000}}>
                <div className="register js-verification-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Xác nhận</h1>
                        <p className="slogan-register">Vui lòng nhập mã xác nhận đã được gửi về email</p>
                    </div>
                    <div className="border" />
                    <form action className="register-form">
                        <div className="input-register">
                            <input className="input-items" placeholder="Nhập mã OTP" required type="text" />
                        </div>
                        <div className="register-div">
                            <a className="btn-register btn-OK-verification" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default VerificationScreen;