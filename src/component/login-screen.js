import React from 'react';
import '../css/style.css'
import ForgotScreen from "./forgot-screen";
import Register from "./register";
import NotifySuccessScreen from "./notify-success-screen";
import NotifyFailScreen from "./notify-fail-screen";
import VerificationScreen from "./verification-screen";
import NewPassScreen from "./new-pass-screen";

const LoginScreen = ({closeLogin, showForgot}) => {
    const btnForgot = document.querySelector('.js-forgot-pass')

    if (btnForgot) {
        btnForgot.addEventListener('click', closeLogin)
        btnForgot.addEventListener('click', showForgot)
    }
    return (
       <>
           <div className="js-login" id="login-main" style={{zIndex: 1000}}>
               <div className="login js-login-container">
                   <div className="title-login">
                       <a className="close-login" role="button" />
                       <h1 className="title-login-main">Đăng nhập</h1>
                       <p className="slogan-login">Hãy tham gia cùng chúng tôi</p>
                   </div>
                   <div className="border" />
                   <form action className="login-form">
                       <div className="input-login">
                           <input className="input-items" placeholder="Tên đăng nhập" required type="text" />
                           <input className="input-items" placeholder="Mật khẩu" required type="password" />
                       </div>
                       <button className="btn-login">Đăng nhập</button>
                   </form>
                   <div className="forgot-pass-main">
                       <a className="forgot-pass js-forgot-pass" role="button">Quên mật khẩu</a>
                   </div>
                   <div className="border" />
                   <div className="new-account">
                       <a className="btn-new-account js-new-account" role="button">Tạo tài khoản mới</a>
                   </div>
               </div>
           </div>
       </>
    );
};

export default LoginScreen;