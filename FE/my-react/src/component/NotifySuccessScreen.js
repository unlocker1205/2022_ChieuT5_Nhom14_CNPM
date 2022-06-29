import React, {useEffect, useState} from 'react';
import '../css/account.css'

const NotifySuccessScreen = ({
                                 currentComponent,
                                 showVerification,
                                 closeVerification,
                                 showNewPass,
                                 closeNewPass,
                                 closeNotifySuccess
                             }) => {
    useEffect(function () {
        const notifySuccessContainer = document.querySelector('.js-notify-success-container')

        notifySuccessContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })
    }, [])

    function clickButtonSuccess() {
        closeNotifySuccess()
        switch (currentComponent) {
            case 1:
                showVerification()
                break
            case 2:
                closeVerification()
                showNewPass()
                break
            case 3:
                closeNewPass()
                break
        }
    }
    return (
        <>
            <div className="js-notify-success" id="notify-success-main" style={{zIndex: 10000}}>
                <div className="register js-notify-success-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Thành công</h1>
                        <p className="slogan-register">Thao tác thành công, sẵn sàng đến bước tiếp theo</p>
                    </div>
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                        </div>
                        <div className="register-div">
                            <a onClick={clickButtonSuccess} className="btn-register btn-OK-success" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NotifySuccessScreen;