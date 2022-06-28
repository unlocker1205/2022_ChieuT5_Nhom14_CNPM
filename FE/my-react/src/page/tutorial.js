import React from 'react';
import Header from "../component/Header";
import '../css/tutorial.css'
import LoginScreen from "../component/LoginScreen";
import ForgotScreen from "../component/ForgotScreen";
import Register from "../component/register";

const Tutorial = () => {
    return (
        <>
            <div>
                <div id="main-tutorial">
                    <Header/>
                    <div id="cart-hover" className="hover-cart">
                        <div className="cover-cart-item">
                            <div className="cart-item">
                                <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                                </div>
                                <div className="details-cart-item">
                                    <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x
                                        1080/IPS/60Hz/5 ms)
                                    </div>
                                    <div className="num-cart-item">Số lượng: 2</div>
                                    <div className="price-cart-item">5.620.000đ</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                                </div>
                                <div className="details-cart-item">
                                    <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x
                                        1080/IPS/60Hz/5 ms)
                                    </div>
                                    <div className="num-cart-item">Số lượng: 2</div>
                                    <div className="price-cart-item">5.620.000đ</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                                </div>
                                <div className="details-cart-item">
                                    <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x
                                        1080/IPS/60Hz/5 ms)
                                    </div>
                                    <div className="num-cart-item">Số lượng: 2</div>
                                    <div className="price-cart-item">5.620.000đ</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                                </div>
                                <div className="details-cart-item">
                                    <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x
                                        1080/IPS/60Hz/5 ms)
                                    </div>
                                    <div className="num-cart-item">Số lượng: 2</div>
                                    <div className="price-cart-item">5.620.000đ</div>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="img-cart-item" style={{backgroundImage: 'url(../image/image99.png)'}}>
                                </div>
                                <div className="details-cart-item">
                                    <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x
                                        1080/IPS/60Hz/5 ms)
                                    </div>
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
                            <div role="button" className="btn-view-cart"><a href="cart.html" className="btn-tt">Xem giỏ
                                hàng</a></div>
                        </div>
                    </div>
                    <div id="container">
                        <div className="title-tutorial">HƯỚNG DẪN MUA HÀNG</div>
                        <div className="step">Bước 1: Đăng nhập</div>
                        <div className="content-tutorial">Trước khi mua hàng, bạn cần đăng nhập vào tài khoản của mình
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial-login.png)'}}/>
                        <div className="content-tutorial">Trong trường hợp bạn quên mật khẩu, bạn có thể nhấp
                            vào <strong>Quên mật khẩu</strong> và làm theo hướng dẫn sau đó
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial-fogot.png)'}}/>
                        <div className="content-tutorial">Nếu bạn chưa có tài khoản, bạn cũng có thể nhấp vào <strong>Tạo
                            tài khoản mới</strong> và tiến hành làm theo hướng dẫn
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial-register.png)'}}/>
                        <div className="step">Bước 2: Tìm sản phẩm cần mua</div>
                        <div className="content-tutorial">Sử dụng ô tìm kiếm phía trên, gõ tên sản phẩm muốn mua (có thể
                            tìm đích danh 1 sản phẩm, tìm theo hãng...)
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial1.png)'}}/>
                        <div className="content-tutorial">Trang web luôn có sẵn những gợi ý sản phẩm hot nhất, có chương
                            trình khuyến mãi hấp dẫn, bạn cũng có thể chọn xem ngay mà không cần tìm kiếm
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial2.png)'}}/>
                        <div className="content-tutorial">Hoặc bạn cũng có thể tham khảo các sản phẩm bán chạy nhất ở
                            cuối trang
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial3.png)'}}/>
                        <div className="step">Bước 3: Đặt mua sản phẩm</div>
                        <div className="content-tutorial">Sau khi chọn được sản phẩm ưng ý muốn mua, bạn tiến hành đặt
                            hàng bằng cách:
                        </div>
                        <div className="content-tutorial">+ Chọn vào nút <strong>MUA NGAY</strong> nếu bạn muốn thanh
                            toán luôn toàn bộ giá tiền sản phẩm hoặc nút <strong>THÊM VÀO GIỎ HÀNG</strong></div>
                        <div className="content-tutorial">+ Hệ thống sẽ ghi nhận địa chỉ mà bạn đã đăng kí tài khoản
                            trước đó
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial4.png)'}}/>
                        <div className="content-tutorial">Ngoài ra, nếu bạn đang sở hữu phiếu mua hàng, mã giảm giá...
                            thì hãy nhập trong giỏ hàng đã đặt để được giảm giá
                        </div>
                        <div className="img-tutorial"
                             style={{backgroundImage: 'url(../image/Tutorial/tutorial6.png)'}}/>
                        <div className="content-tutorial"><strong>Xin trân trọng cảm ơn!</strong></div>
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

export default Tutorial;