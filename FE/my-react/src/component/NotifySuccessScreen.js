import React, {useEffect, useState} from 'react';
import '../css/account.css'

const NotifySuccessScreen = ({
                                 currentComponent,
                                 showVerification,
                                 closeVerification,
                                 showNewPass,
                                 closeNewPass,
                                 closeNotifySuccess, title
                             }) => {

    function clickButtonSuccessOK() {
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
                        <p className="slogan-register">{title}</p>
                    </div>
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                        </div>
                        <div className="register-div">
                            <a onClick={clickButtonSuccessOK} className="btn-register btn-OK-success" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NotifySuccessScreen;