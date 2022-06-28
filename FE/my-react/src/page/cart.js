import React from 'react';
import Header from "../component/Header";
import '../css/cart.css'
import LoginScreen from "../component/LoginScreen";
import ForgotScreen from "../component/ForgotScreen";
import Register from "../component/register";

const Cart = () => {
    return (
        <>
            <div id="cart-main">
                <Header/>
                <div className="cart">
                    <div className="container padding padding-top-60">
                        <div className="address-menu">
                            <div className="sub-container">
                                <div className="home-btn sub-container-content">
                                    <a role="button" className="btn-circle white-bg" href="../index.html">
                                        <i className="fas fa-home"/>
                                    </a>
                                </div>
                                <div className="arrow">
                                    <i className="fas fa-arrow-right"/>
                                </div>
                                <div className="current-btn sub-container-content">
                                    <span className="info-content black-text rounded-border">Giỏ hàng</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-info">
                            <div className="left-content">
                                <div id="your-cart">
                                    <div className="container">
                                        <div className="top-content">
                                            <div className="top-content-container">
                                                <div className="title">
                          <span className="content">
                            <span className="big-text bolder">Giỏ hàng của bạn</span>
                          </span>
                                                </div>
                                                <div className="btn-clear">
                                                    <button className="clear">
                                                        <span>Xóa tất cả</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-container">
                                        <div className="cart-header">
                                            <div className="left-provider-content">
                                                <div className="provider-container">
                                                    <div className="provider-padding provider-checkbox">
                                                        <input type="checkbox" name="checkAllProduct" defaultValue/>
                                                    </div>
                                                    <div className="provider-padding-left provider-info">
                                                        <div className="provider-icon">
                                                            <img className="provider-logo" src="../image/asus-logo.png"
                                                                 alt="Asus"/>
                                                        </div>
                                                    </div>
                                                    <div className="provider-padding provider-name">
                                                        <span className="normal-text bolder">Asus</span>
                                                    </div>
                                                    <div className="provider-padding verified-logo">
                                                        <i className="fas fa-check-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right-provider-content">
                                                <span
                                                    className="total-pay blue-text bolder"> 84000000<span>đ</span></span>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">Mã Laptop: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">Mã Laptop: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">Mã Laptop: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-container">
                                        <div className="cart-header">
                                            <div className="left-provider-content">
                                                <div className="provider-container">
                                                    <div className="provider-padding provider-checkbox">
                                                        <input type="checkbox" name="checkAllProduct" defaultValue/>
                                                    </div>
                                                    <div className="provider-padding-left provider-info">
                                                        <div className="provider-icon">
                                                            <img className="provider-logo" src="../image/asus-logo.png"
                                                                 alt="Asus"/>
                                                        </div>
                                                    </div>
                                                    <div className="provider-padding provider-name">
                                                        <span className="normal-text bolder">Asus</span>
                                                    </div>
                                                    <div className="provider-padding verified-logo">
                                                        <i className="fas fa-check-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right-provider-content">
                                                <span
                                                    className="total-pay blue-text bolder"> 84000000<span>đ</span></span>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">Mã Laptop: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">Mã Laptop: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <div className="container">
                                                <div className="item">
                                                    <div className="left-cart-item">
                                                        <div className="item-checkbox item-padding">
                                                            <input type="checkbox" name="checkItem" defaultValue/>
                                                        </div>
                                                        <div className="item-thumbnail item-padding">
                                                            <img className="item-logo-thumbnail"
                                                                 src="../image/man-hinh-asus.jpg"/>
                                                        </div>
                                                        <div className="item-info-container item-padding">
                                                            <span className="item-info-name smaller-text">Màn hình LCD ASUS VL249HE (1920 x 1080/IPS/75Hz/5 ms)</span>
                                                            <span
                                                                className=" item-info-sku smaller-text light-gray-text">SKU: 191100961</span>
                                                        </div>
                                                    </div>
                                                    <div className="right-cart-item">
                                                        <div className="btn-add-subtract">
                                                            <button className="btn-padding btn-subtract">
                                                                <i className="icon-btn fas fa-chevron-down"/>
                                                            </button>
                                                            <div className="btn-padding number">1</div>
                                                            <button className="btn-padding btn-add">
                                                                <i className="icon-btn fas fa-chevron-up"/>
                                                            </button>
                                                        </div>
                                                        <div className="price">
                                                            <span
                                                                className="bolder gray-text price-text">4300000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="container">
                                    <div className="coupon">
                                        <div className="container">
                                            <div className="coupon-header">
                                                <span className="coupon-text">Mã giảm giá</span>
                                                <div className="coupon-input-container">
                                                    <input className="coupon-input" type="text"
                                                           placeholder="Nhập mã của bạn"/>
                                                    <button className="confirm-btn"><span>Áp dụng ngay</span></button>
                                                </div>
                                            </div>
                                            <div className="break">
                                                <hr className="hr-break"/>
                                            </div>
                                            <div className="list-applied-coupon">
                                                <div className="coupon container">
                                                    <div className="applied-coupon-left">
                                                        <div className="coupon-applied">
                                                            <div className="coupon-code">
                                                                <span className="bolder larger-text">123Y681209</span>
                                                            </div>
                                                            <div className="coupon-name padding-10">
                                                                <span className="blue-text smaller-text">Giảm giá 30% dành cho đồ điện tử</span>
                                                            </div>
                                                            <div className="active-day padding-10">
                                                                <span className="experied-day smaller-text">HSD:</span>
                                                                <span
                                                                    className="red-text smaller-text">đến 30/10/2021</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="applied-coupon-right">
                                                        <div className="returned-money">
                                                            <span>-</span>
                                                            <span className="blue-text">30000<span>đ</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="coupon container">
                                                    <div className="applied-coupon-left">
                                                        <div className="coupon-applied">
                                                            <div className="coupon-code">
                                                                <span className="bolder larger-text">123Y681209</span>
                                                            </div>
                                                            <div className="coupon-name padding-10">
                                                                <span className="blue-text smaller-text">Giảm giá 30% dành cho đồ điện tử</span>
                                                            </div>
                                                            <div className="active-day padding-10">
                                                                <span className="experied-day smaller-text">HSD:</span>
                                                                <span
                                                                    className="red-text smaller-text">đến 30/10/2021</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="applied-coupon-right">
                                                        <span>-</span>
                                                        <span
                                                            className="blue-text returned-money">30000<span>đ</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cash">
                                        <div className="container">
                                            <div className="cash-title">
                                                <span className="large-text bolder">Thanh toán</span>
                                            </div>
                                            <div className="final-price">
                                                <span className="left gray-text">Thành tiền</span>
                                                <span
                                                    className="right final-cash large-text red-text bolder">4300000<span>đ</span></span>
                                            </div>
                                            <div className="buy">
                                                <button className="buy-btn">Mua hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="footer-main">
                        <div className="footer-element">
                            <a className="footer-icon" href="https://github.com/unlocker1205/LaptopSellingWebsite"
                               target="_blank"><i className="fab fa-github"/></a>
                            <a className="footer-icon" href target="_blank"><i className="fas fa-globe-asia"/></a>
                            <a className="footer-icon" href target="_blank"><i className="fas fa-users"/></a>
                            <p className="copyright">Design by Team 1 © Web programming 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;