package com.laptopsellingwebsite.beans;

import java.util.Date;

public class Account {
    private String idTK;
    private String maKH;
    private String userNameAccount;
    private String passwordAccount;
    private int OTP;

    public Account(String idTK, String maKH, String userNameAccount, String passwordAccount, int OTP) {
        this.idTK = idTK;
        this.maKH = maKH;
        this.userNameAccount = userNameAccount;
        this.passwordAccount = passwordAccount;
        this.OTP = OTP;
    }

    public String getMaKH() {
        return maKH;
    }

    public void setMaKH(String maKH) {
        this.maKH = maKH;
    }

    public String getIdTK() {
        return idTK;
    }

    public void setIdTK(String idTK) {
        this.idTK = idTK;
    }

    public String getUserNameAccount() {
        return userNameAccount;
    }

    public void setUserNameAccount(String userNameAccount) {
        this.userNameAccount = userNameAccount;
    }

    public String getPasswordAccount() {
        return passwordAccount;
    }

    public void setPasswordAccount(String passwordAccount) {
        this.passwordAccount = passwordAccount;
    }

    public int getOTP() {
        return OTP;
    }

    public void setOTP(int OTP) {
        this.OTP = OTP;
    }
}
