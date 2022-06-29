import React, {useEffect, useRef} from 'react';
import axios from "axios";
import '../css/account.css'

const VerificationScreen = ({closeVerification, showNotifySuccess, showNotifyFail}) => {
    useEffect(function () {
        const verificationContainer = document.querySelector('.js-verification-container')

        verificationContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    }, [])

    let boolean;
    const otp = useRef(null)

    function clickButtonVerification() {
        axios.get('http://localhost:8080/back-end/check-OTP?otp=' + otp.current.value)
            .then(function (response) {
                boolean = response.data
                if (boolean) {
                    closeVerification()
                    showNotifySuccess()
                } else {
                    showNotifyFail()
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (
        <>
            <div className="js-verification" id="verification-main" style={{zIndex: 1000}}>
                <div className="register js-verification-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Xác nhận</h1>
                        <p className="slogan-register">Vui lòng nhập mã xác nhận đã được gửi về email</p>
                    </div>
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                            <input ref={otp} id="otp-input" className="input-items" placeholder="Nhập mã OTP" required
                                   type="text"/>
                        </div>
                        <div className="register-div">
                            <a onClick={clickButtonVerification} className="btn-register btn-OK-verification" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default VerificationScreen;