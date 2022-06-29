import React, {useEffect, useRef} from 'react';
import '../css/account.css'
import axios from "axios";

const ForgotScreen = ({closeForgot, showNotifySuccess, showNotifyFail}) => {
    const email = useRef(null)
    let boolean;

    const clickFindAccount = function () {
        axios.get('http://localhost:8080/back-end/find-account?email=' + email.current.value)
            .then(function (response) {
                boolean = response.data
                if (boolean) {
                    axios.post('http://localhost:8080/back-end/send-OTP', email.current.value)
                        .then(function (response) {
                        })
                        .catch(function (error) {
                            console.log(error)
                        });
                    closeForgot()
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
        <div className="js-forgot" id="forgot-main" style={{zIndex: 1000}}>
            <div className="forgot js-forgot-container">
                <div className="title-forgot">
                    <a className="close-forgot" role="button"/>
                    <h1 className="title-forgot-main">Quên mật khẩu</h1>
                    <p className="slogan-forgot">Chúng tôi sẽ hỗ trợ tận tình</p>
                </div>
                <div className="border"/>
                <div className="forgot-form">
                    <div className="input-forgot">
                        <input ref={email} id="email-input" className="input-items" placeholder="Email đăng kí" required
                               type="text"/>
                    </div>
                    <button onClick={clickFindAccount} name="find-account" className="btn-forgot js-find-account"
                            role="button">Tìm tài khoản
                    </button>
                </div>
                <div className="border"/>
                <div className="come-back">
                    <a className="btn-come-back js-come-back" role="button">Quay trở lại đăng nhập</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotScreen;