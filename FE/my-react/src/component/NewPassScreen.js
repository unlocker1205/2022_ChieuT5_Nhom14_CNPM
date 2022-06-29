import React, {useEffect, useRef} from 'react';
import axios from "axios";
import '../css/account.css'

const NewPassScreen = ({closeNewPass, showNotifySuccess, showNotifyFail}) => {
    useEffect(function () {
        const newPassContainer = document.querySelector('.js-new-pass-container')

        newPassContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    }, [])

    const newPass = useRef(null)
    const newPassRep = useRef(null)

    function clickButtonNewPass() {
        if ((newPass.current.value === newPassRep.current.value) && (newPass.current.value !== '') && (newPassRep.current.value !== '')) {
            axios.post('http://localhost:8080/back-end/update-password', newPass.current.value)
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error)
                });
            closeNewPass()
            showNotifySuccess()
        } else {
            showNotifyFail()
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
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                            <input id="new-pass" className="input-items" placeholder="Mật khẩu mới" required
                                   type="password"/>
                            <input id="new-pass-rep" className="input-items" placeholder="Nhập lại mật khẩu mới"
                                   required type="password"/>
                        </div>
                        <div className="register-div">
                            <a onClick={clickButtonNewPass} className="btn-register btn-new-pass" role="button">Xác nhận</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassScreen;