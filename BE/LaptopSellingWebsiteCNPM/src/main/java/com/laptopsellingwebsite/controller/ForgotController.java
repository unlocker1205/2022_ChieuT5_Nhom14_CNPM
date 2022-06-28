package com.laptopsellingwebsite.controller;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.laptopsellingwebsite.Request;
import com.laptopsellingwebsite.beans.Account;
import com.laptopsellingwebsite.service.UserService;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;
import java.util.Properties;
import java.util.Random;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

@WebServlet(urlPatterns = {"/find-account", "/check-OTP", "/update-password", "/send-OTP"})
public class ForgotController extends HttpServlet {
    String emailStatic = "";

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        response.setHeader("Access-Control-Allow-Origin", "*");
        switch (request.getRequestURI()) {
            case "/back-end/find-account":
                emailStatic = request.getParameter("email");
                List<Account> accountList = UserService.getInstance().getAccount(emailStatic);
                if (accountList.isEmpty() || accountList.size() == 0) {
                    mapper.writeValue(response.getOutputStream(), false);
                } else {
                    mapper.writeValue(response.getOutputStream(), true);
                }
                break;
            case "/back-end/check-OTP":
                int otp = Integer.parseInt(request.getParameter("otp"));
                List<Account> accountList1 = UserService.getInstance().checkOTP(emailStatic, otp);
                if (accountList1.isEmpty() || accountList1.size() == 0) {
                    mapper.writeValue(response.getOutputStream(), false);
                } else {
                    mapper.writeValue(response.getOutputStream(), true);
                }
                break;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

        switch (request.getRequestURI()) {
            case "/back-end/send-OTP":
                String email = Request.getBody(request);
                Random rand = new Random();
                int otp = 100000 + rand.nextInt(900000);
                Properties props = new Properties();
                props.setProperty("mail.smtp.auth", "true");
                props.setProperty("mail.smtp.starttls.enable", "true");
                props.setProperty("mail.smtp.host", "smtp.gmail.com");
                props.setProperty("mail.smtp.port", "587");
                props.put("mail.smtp.host", "smtp.gmail.com");
                props.put("mail.smtp.port", "587");
                props.put("mail.smtp.auth", "true");
                props.put("mail.smtp.ssl.protocols", "TLSv1.2");
                props.put("mail.smtp.starttls.enable", "true");
                props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
                props.put("mail.smtp.ssl.trust", "*");

                Session session = Session.getInstance(props, new Authenticator() {
                    @Override
                    protected PasswordAuthentication getPasswordAuthentication() {
                        String username = "19130215@st.hcmuaf.edu.vn";
                        String password = "0982625202javan3";
                        return new PasswordAuthentication(username, password);
                    }
                });
                session.getProperties().put("mail.smtp.ssl.trust", "smtp.gmail.com");
                session.getProperties().put("mail.smtp.starttls.enable", "true");
                MimeMessage message =new MimeMessage(session);
                try {
                    message.setFrom(new InternetAddress(emailStatic));
                    message.setRecipients(Message.RecipientType.TO, emailStatic);
                    message.setSubject("Mã kích hoạt", "utf-8");
                    message.setText(String.valueOf(otp), "utf-8", "html");
                    message.setReplyTo(message.getFrom());
                    Transport.send(message);
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
                UserService.getInstance().updateOTP(email, otp);
                break;
            case "/back-end/update-password":
                String newPass = Request.getBody(request);
                UserService.getInstance().updatePass(emailStatic, newPass);
                break;
        }
    }
}
