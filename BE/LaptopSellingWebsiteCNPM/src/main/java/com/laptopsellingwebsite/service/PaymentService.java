package com.laptopsellingwebsite.service;

import com.laptopsellingwebsite.beans.Bank;
import com.laptopsellingwebsite.beans.Cart;
import com.laptopsellingwebsite.beans.ListBank;
import com.laptopsellingwebsite.beans.Product;

import com.laptopsellingwebsite.dao.UserDAO;

import java.util.ArrayList;

public class PaymentService {
    private static PaymentService instance;

    private PaymentService() {

    }

    public static PaymentService getInstance() {
        if (instance == null) {
            instance = new PaymentService();
        }
        return instance;
    }

    public ArrayList getInfoCustomer(String maKH) {
        return UserDAO.getInstance().getInfoCustomer(maKH);
    }

    public double getTotalPrice() {
        return Cart.getInstance().getTotalPrice();
    }

    public String showListBank() {
        return ListBank.getInstance().toString();
    }
}