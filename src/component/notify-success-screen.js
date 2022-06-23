import React from 'react';
import '../css/style.css'

const NotifySuccessScreen = ({currentComponent, showVerification, closeVerification, showNewPass, closeNewPass, closeNotifySuccess}) => {
    const btnOKSuccess = document.querySelector('.btn-OK-success')

    if (btnOKSuccess) {
        switch (currentComponent) {
            case 1:
                btnOKSuccess.addEventListener('click', showVerification)
                break
            case 2:
                btnOKSuccess.addEventListener('click', closeVerification)
                btnOKSuccess.addEventListener('click', showNewPass)
                break
            case 3:
                btnOKSuccess.addEventListener('click', closeNewPass)
                break
        }
        btnOKSuccess.addEventListener('click', closeNotifySuccess)
    }
    return (
        <>
            <div className="js-notify-success" id="notify-success-main" style={{zIndex: 10000}}>
                <div className="register js-notify-success-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Thành công</h1>
                        <p className="slogan-register">Thao tác thành công, bạn có thể đến bước tiếp theo</p>
                    </div>
                    <div className="border" />
                    <form action className="register-form">
                        <div className="input-register">
                        </div>
                        <div className="register-div">
                            <a className="btn-register btn-OK-success" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NotifySuccessScreen;