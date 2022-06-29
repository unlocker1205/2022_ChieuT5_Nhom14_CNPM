package com.laptopsellingwebsite.controller;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.laptopsellingwebsite.Request;
import com.laptopsellingwebsite.beans.Cart;
import com.laptopsellingwebsite.service.PaymentService;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;



@WebServlet(urlPatterns = { "/payment","/ngan-hang" })
public class PaymentController extends HttpServlet {
        String maKH = "";

        protected void doGet(HttpServletRequest request, HttpServletResponse response)
                        throws ServletException, IOException {
        }

        protected void doPost(HttpServletRequest request, HttpServletResponse response)
                        throws ServletException, IOException {
                ObjectMapper mapper = new ObjectMapper();
                response.setHeader("Access-Control-Allow-Origin", "*");
                response.setHeader("Access-Control-Allow-Credentials", "true");
                response.setHeader("Access-Control-Allow-Headers",
                                "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
                switch (request.getRequestURI()) {
                        case "/back-end/payment":
                                maKH = request.getParameter("maKH");

                                PaymentService.getInstance().getInfoCustomer(maKH);
                                PaymentService.getInstance().getTotalPrice();

                                mapper.writeValue(response.getOutputStream(), true);
                                break;
                        case "back-end/ngan-hang":

                                PaymentService.getInstance().showListBank();
                                mapper.writeValue(response.getOutputStream(), true);
                                break;
                }
        }
}