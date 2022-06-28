package com.laptopsellingwebsite.dao;

import com.laptopsellingwebsite.beans.Account;
import com.laptopsellingwebsite.beans.Customer;
import com.laptopsellingwebsite.db.DBConnect;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UserDAO {
    private static UserDAO instance;

    public static UserDAO getInstance() {
        if (instance == null) {
            instance = new UserDAO();
        }
        return instance;
    }

    public ArrayList getAccount(String email) {
        ArrayList<Account> listResult = new ArrayList<>();
        try {
            String query = "SELECT * FROM khachhang kh join taikhoan tk ON kh.MAKH = tk.MAKH WHERE kh.EMAIL = ?";
            PreparedStatement ps = DBConnect.getInstance().get(query);
            ps.setString(1, email);
            ResultSet resultSet = ps.executeQuery();
            while (resultSet.next()) {
                Account account = new Account(resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getInt(9));
                listResult.add(account);
            }
            return listResult;
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void updateOTP(String email, int otp) {
        try {
            String query = "UPDATE taikhoan SET OTP = ? WHERE id = (SELECT id FROM khachhang kh join taikhoan tk ON kh.MAKH = tk.MAKH WHERE kh.EMAIL = ?)";
            PreparedStatement ps = DBConnect.getInstance().get(query);
            ps.setInt(1, otp);
            ps.setString(2, email);
            ps.executeUpdate();
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public ArrayList checkOTP(String email, int otp) {
        ArrayList<Account> listResult = new ArrayList<>();
        try {
            String query = "SELECT tk.ID, tk.MAKH, tk.USERNAME, tk.PASSWORD, tk.OTP FROM khachhang kh join taikhoan tk ON kh.MAKH = tk.MAKH WHERE kh.EMAIL = ? AND tk.OTP = ?";
            PreparedStatement ps = DBConnect.getInstance().get(query);
            ps.setString(1, email);
            ps.setInt(2, otp);
            ResultSet resultSet = ps.executeQuery();
            while (resultSet.next()) {
                Account account = new Account(resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getInt(5));
                listResult.add(account);
            }
            return listResult;
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void updatePass(String email, String newPass) {
        try {
            String query = "UPDATE taikhoan SET PASSWORD = ? WHERE id = (SELECT id FROM khachhang kh join taikhoan tk ON kh.MAKH = tk.MAKH WHERE kh.EMAIL = ?)";
            PreparedStatement ps = DBConnect.getInstance().get(query);
            ps.setString(1, newPass);
            ps.setString(2, email);
            ps.executeUpdate();
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
