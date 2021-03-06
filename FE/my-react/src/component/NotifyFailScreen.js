import React, {useEffect, useState} from 'react';
import '../css/account.css'

const NotifyFailScreen = ({closeNotifyFail, title}) => {
    function clickButtonFailOK() {
        closeNotifyFail()
    }


    return (
        <>
            <div className="js-notify-fail" id="notify-fail-main" style={{zIndex: 10000}}>
                <div className="register js-notify-fail-container">
                    <div className="title-register">
                        <h1 className="title-register-main" style={{margin: 0, lineHeight: '1.4'}}>Thất bại</h1>
                        <p className="slogan-register">{title}</p>
                    </div>
                    <div className="border"/>
                    <form action className="register-form">
                        <div className="input-register">
                        </div>
                        <div className="register-div">
                            <a onClick={clickButtonFailOK} className="btn-register btn-OK-fail" role="button">OK</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NotifyFailScreen;