package com.laptopsellingwebsite.beans;

import java.util.HashMap;
import java.util.Map;

public class Cart {

    private Map<String, Product> data;
    private static Cart instance;

    public Cart() {
        data = new HashMap<>();
    }

    public static Cart getInstance() {
        if (instance == null) {
            instance = new Cart();
        }
        return instance;
    }

    public void putProduct(Product product) {
        data.put(product.getMaSP(), product);
    }

    public Product getProduct(String id) {
        return data.get(id);
    }

    public void remove(String id) {
        data.remove(id);
    }

    public double getTotalPrice() {
        double result = 0.0;
        for (Product p : data.values()) {
            result += p.getGiaSP();
        }
        return result;
    }
}