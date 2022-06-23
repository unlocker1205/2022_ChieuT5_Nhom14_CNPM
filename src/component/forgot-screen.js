import React from 'react';
import '../css/style.css'

const ForgotScreen = ({closeForgot, showNotifySuccess, showNotifyFail}) => {
    const btnFindAccount = document.querySelector('.js-find-account')



    if (btnFindAccount) {
        if (true) {
            btnFindAccount.addEventListener('click', closeForgot)
            btnFindAccount.addEventListener('click', showNotifySuccess)
        } else {
            btnFindAccount.addEventListener('click', showNotifyFail)
        }
    }

    return (
        <>
            <div className="js-forgot" id="forgot-main" style={{zIndex: 1000}}>
                <div className="forgot js-forgot-container">
                    <div className="title-forgot">
                        <a className="close-forgot" role="button" />
                        <h1 className="title-forgot-main">Quên mật khẩu</h1>
                        <p className="slogan-forgot">Chúng tôi sẽ hỗ trợ tận tình</p>
                    </div>
                    <div className="border" />
                    <form action className="forgot-form">
                        <div className="input-forgot">
                            <input className="input-items" placeholder="Email đăng kí" required type="text" />
                        </div>
                        <a  className="btn-forgot js-find-account"  role="button">Tìm tài khoản</a>
                    </form>
                    <div className="border" />
                    <div className="come-back">
                        <a className="btn-come-back js-come-back" role="button">Quay trở lại đăng nhập</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotScreen;