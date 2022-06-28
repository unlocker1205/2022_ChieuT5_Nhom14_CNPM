import React from 'react';
import Header from "../component/Header";
import '../css/about.css'
import LoginScreen from "../component/LoginScreen";
import ForgotScreen from "../component/ForgotScreen";
import Register from "../component/register";

const AboutUs = () => {
    return (
        <div>
            <div id="about-us">
                <Header/>
                <div id="cart-hover" className="hover-cart">
                    <div className="cover-cart-item">
                        <div className="cart-item">
                            <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                            </div>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                            </div>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                            </div>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                            </div>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                            </div>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                    </div>
                    <div className="total-cart">
                        <div className="total-price-infor">
                            <div className="total-product">Tổng tiền (2) sản phẩm</div>
                            <div className="total-price">11.240.000đ</div>
                        </div>
                        <div role="button" className="btn-view-cart"><a href="cart.html" className="btn-tt">Xem giỏ hàng</a></div>
                    </div>
                </div>
                <div id="content">
                    <div className="member">
                        <div className="member-items">
                            <div className="image-member">
                                <img src="../image/member/quocthinh.jpg" alt="" className="img" />
                            </div>
                            <div className="name-member">
                                <h1 className="name">Lê Quốc Thịnh</h1>
                            </div>
                            <div className="member-role">
                                <p className="role">Leader</p>
                            </div>
                            <div className="link-member">
                                <a href="https://www.facebook.com/unlocker0808/" target="_blank" title="Facebook cá nhân" className="link-member-items"><i className="fab fa-facebook" /></a>
                                <a href="https://github.com/unlocker1205/BaiTapLapTrinhWeb" target="_blank" title="Github cá nhân" className="link-member-items"><i className="fab fa-github" /></a>
                                <a href="https://19130215.tk/" target="_blank" title="Link web cá nhân" className="link-member-items"><i className="fas fa-link" /></a>
                            </div>
                        </div>
                        <div className="member-items">
                            <div className="image-member">
                                <img src alt="" className="img" />
                            </div>
                            <div className="name-member">
                                <h1 className="name">Member 2</h1>
                            </div>
                            <div className="member-role">
                                <p className="role">Member</p>
                            </div>
                            <div className="link-member">
                                <a href target="_blank" title="Facebook cá nhân" className="link-member-items"><i className="fab fa-facebook" /></a>
                                <a href target="_blank" title="Github cá nhân" className="link-member-items"><i className="fab fa-github" /></a>
                                <a href target="_blank" title="Link web cá nhân" className="link-member-items"><i className="fas fa-link" /></a>
                            </div>
                        </div>
                        <div className="member-items">
                            <div className="image-member">
                                <img src alt="" className="img" />
                            </div>
                            <div className="name-member">
                                <h1 className="name">Member 3</h1>
                            </div>
                            <div className="member-role">
                                <p className="role">Member</p>
                            </div>
                            <div className="link-member">
                                <a href target="_blank" title="Facebook cá nhân" className="link-member-items"><i className="fab fa-facebook" /></a>
                                <a href target="_blank" title="Github cá nhân" className="link-member-items"><i className="fab fa-github" /></a>
                                <a href target="_blank" title="Link web cá nhân" className="link-member-items"><i className="fas fa-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="footer-main">
                        <div className="footer-element">
                            <a className="footer-icon" href="https://github.com/unlocker1205/LaptopSellingWebsite" target="_blank"><i className="fab fa-github" /></a>
                            <a className="footer-icon" href target="_blank"><i className="fas fa-globe-asia" /></a>
                            <a className="footer-icon" href target="_blank"><i className="fas fa-users" /></a>
                            <p className="copyright">Design by Team 1 © Web programming 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;