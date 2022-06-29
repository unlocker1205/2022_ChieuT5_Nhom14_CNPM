package com.laptopsellingwebsite.beans;

public class Bank {
    private String idBank;
    private String nameBank;

    public Bank(String idBank, String nameBank) {
        this.idBank = idBank;
        this.nameBank = nameBank;
    }
    public String getIdBank() {
        return idBank;
    }

    public void setIDBank(String idBank) {
        this.idBank = idBank;
    }

    public String getNameBank() {
        return nameBank;
    }

    public void setNameBank(String nameBank) {
        this.nameBank = nameBank;
    }
}
