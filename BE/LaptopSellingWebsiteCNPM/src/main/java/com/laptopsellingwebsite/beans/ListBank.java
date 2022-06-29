package com.laptopsellingwebsite.beans;

import java.util.HashMap;
import java.util.Map;

public class ListBank {

    private Map<String, Bank> data;
    private static ListBank instance;

    public ListBank() {
        data = new HashMap<>();
    }

    public static ListBank getInstance() {
        if (instance == null) {
            instance = new ListBank();
        }
        return instance;
    }
    
    public void putBank(Bank bank) {
        data.put(bank.getIdBank(), bank);
    }
}