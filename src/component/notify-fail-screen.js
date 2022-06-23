import React from 'react';
import '../css/style.css'

const NotifyFailScreen = ({closeNotifyFail}) => {
    const btnOKFail = document.querySelector('.btn-OK-fail')

    if (btnOKFail) {
        btnOKFail.addEventListener('click', closeNotifyFail)
    }
    return (
        <>
            <div className="js-notify-fail" id="notify-fail-main" style={{zIndex: 10000}}>
                <div className="register js-notify-fail-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Thất bại</h1>
                        <p className="slogan-register">Thao tác không thành công, bạn không thể đến bước tiếp theo</p>
                    </div>
                    <div className="border" />
                    <form action className="register-form">
                        <div className="input-register">
                        </div>
                        <div className="register-div">
                            <a className="btn-register btn-OK-fail" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NotifyFailScreen;