package com.laptopsellingwebsite.service;

import com.laptopsellingwebsite.beans.Account;
import com.laptopsellingwebsite.dao.UserDAO;

import java.util.List;

public class UserService {
    private static UserService instance;

    private UserService() {

    }

    public static UserService getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }

    public List<Account> getAccount(String email) {
        return UserDAO.getInstance().getAccount(email);
    }

    public void updateOTP(String email, int otp) {
        UserDAO.getInstance().updateOTP(email, otp);
    }

    public List<Account> checkOTP(String email, int otp) {
        return UserDAO.getInstance().checkOTP(email, otp);
    }

    public void updatePass(String email, String newPass) {
        UserDAO.getInstance().updatePass(email, newPass);
    }
}
