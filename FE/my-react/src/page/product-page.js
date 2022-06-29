import React from 'react';
import Header from "../component/Header";
import '../css/product.css'
import LoginScreen from "../component/LoginScreen";
import ForgotScreen from "../component/ForgotScreen";
import Register from "../component/register";

const ProductPage = () => {
    return (
        <>
            <div>
                <Header/>
                <div id="cart-hover" className="hover-cart">
                    <div className="cover-cart-item">
                        {/*        <div class="cart-item">*/}
                        {/*            <div class="img-cart-item" style="background-image: url(../image/image99.png)">*/}
                        {/*            </div>*/}
                        {/*            <div class="details-cart-item">*/}
                        {/*                <div class="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>*/}
                        {/*                <div class="num-cart-item">Số lượng: 2</div>*/}
                        {/*                <div class="price-cart-item">5620000 đ</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div class="cart-item">*/}
                        {/*            <div class="img-cart-item" style="background-image: url(../image/image99.png)">*/}
                        {/*            </div>*/}
                        {/*            <div class="details-cart-item">*/}
                        {/*                <div class="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>*/}
                        {/*                <div class="num-cart-item">Số lượng: 2</div>*/}
                        {/*                <div class="price-cart-item">5620000 đ</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div class="cart-item">*/}
                        {/*            <div class="img-cart-item" style="background-image: url(../image/image99.png)">*/}
                        {/*            </div>*/}
                        {/*            <div class="details-cart-item">*/}
                        {/*                <div class="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</div>*/}
                        {/*                <div class="num-cart-item">Số lượng: 2</div>*/}
                        {/*                <div class="price-cart-item">5620000 đ</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                    </div>
                    <div className="total-cart">
                        <div className="total-price-infor">
                            <div className="total-product"/>
                            {/*            <div class="total-product">Tổng tiền (2) sản phẩm</div>*/}
                            <div className="total-price"/>
                        </div>
                        <div role="button" className="btn-view-cart"><a href="cart.html" className="btn-tt">Xem giỏ
                            hàng</a></div>
                    </div>
                </div>
                <div id="view-image-product">
                    <div id="close-view-image-product"><i className="fas fa-times"/></div>
                    <div className="big-image-view-product"
                         style={{backgroundImage: 'url("../image/dell/dell1/dell1.png")'}}/>
                    <div className="items-image-view-product">
                        <div className="item-image-view-product"
                             style={{backgroundImage: 'url("../image/dell/dell1/dell1.png")'}}/>
                        <div className="item-image-view-product"
                             style={{backgroundImage: 'url("../image/dell/dell1/dell2.png")'}}/>
                        <div className="item-image-view-product"
                             style={{backgroundImage: 'url("../image/dell/dell1/dell3.png")'}}/>
                        <div className="item-image-view-product"
                             style={{backgroundImage: 'url("../image/dell/dell1/dell4.png")'}}/>
                        <div className="item-image-view-product"
                             style={{backgroundImage: 'url("../image/dell/dell1/dell5.png")'}}/>
                    </div>
                </div>
                <div id="product-page">
                    <div id="content-product">
                        <div className="infor-product">
                            <div className="product-details">
                                <div id="product-image" className="product-image"
                                     style={{backgroundImage: 'url("../image/dell/dell1/dell1.png")'}}/>
                                <div className="details-image">
                                    <div className="details-image-item"
                                         style={{backgroundImage: 'url("../image/dell/dell1/dell1.png")'}}/>
                                    <div className="details-image-item"
                                         style={{backgroundImage: 'url("../image/dell/dell1/dell2.png")'}}/>
                                    <div className="details-image-item"
                                         style={{backgroundImage: 'url("../image/dell/dell1/dell3.png")'}}/>
                                    <div className="details-image-item"
                                         style={{backgroundImage: 'url("../image/dell/dell1/dell4.png")'}}/>
                                    <div className="details-image-item"
                                         style={{backgroundImage: 'url("../image/dell/dell1/dell5.png")'}}/>
                                </div>
                                <div className="border-pro"/>
                                <div className="css-17aam1">- Kích thước: 23.8" (1920 x 1080), Tỷ lệ 16:9<br/> - Tấm nền
                                    IPS, Góc nhìn: 178
                                    (H) / 178 (V)<br/> - Tần số quét: 60Hz , Thời gian phản hồi 5 ms<br/>- HIển thị màu
                                    sắc: 16.7 triệu
                                    màu<br/> - Cổng hình ảnh: 1 x DisplayPort 1.2a, 1 x HDMI 1.4, 1 x VGA/D-sub
                                </div>
                            </div>
                            <div className="product-sale">
                                <h1 className="title-pro">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5 ms)</h1>
                                <div className="trademark">Thương hiệu: VIEWSONIC</div>
                                <div className="price-product">6.250.000 VND</div>
                                <div className="border-pro"/>
                                <div className="BOXKHUYENMAILIENQUAN">
                                    <div className="css-mz7xyg">Khuyến mãi liên quan</div>
                                    <ul>
                                        <li>Nhập mã <strong>PV300</strong> giảm thêm 3% tối đa <span
                                            className="css-1m8enhf">300.000<span
                                            className="css-1ul6wk9">đ</span></span> khi thanh toán qua VNPAY-QR.
                                        </li>
                                        <li>Nhập mã <strong>APPLE800</strong> giảm thêm % tối đa <span
                                            className="css-1m8enhf">800.000<span className="css-1ul6wk9">đ</span></span>.
                                            Áp dụng cho một số sản phẩm Apple trên 20.000.000đ
                                            khi thanh toán qua VNPAY-QR.
                                        </li>
                                        <li>Nhập mã <strong>APPLENEW</strong> giảm thêm 5% tối đa <span
                                            className="css-1m8enhf">1.000.000<span
                                            className="css-1ul6wk9">đ</span></span>. Áp dụng cho các
                                            sản phẩm iPhone 13, Ipad 9th GEN &amp; Mini 6 khi thanh toán qua VNPAY-QR.
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-pro"/>
                                <div className="btn-pro">
                                    <div className="mua-ngay"><a href className="btn-mua ripple">MUA NGAY</a></div>
                                    <div className="them-vao-gio"><a role="button" id="them-vao-gio"
                                                                     className="btn-mua ripple">THÊM VÀO GIỎ HÀNG</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sale-policy">
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/free-ship.png")'}}/>
                                {/*                <img src="../image/icon-product/free-ship.png" style="">*/}
                                <span style={{margin: 'auto 0 auto 0'}}>Sản phẩm được miễn phí giao hàng</span>
                            </div>
                            <div className="border-pro"/>
                            <div className="policy" type="subtitle">Chính sách bán hàng</div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/ship.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/ship.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Miễn phí giao hàng cho đơn hàng từ 800K</span>
                            </div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/camket.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/camket.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Cam kết hàng chính hãng 100%</span>
                            </div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/doitra.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/doitra.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Đổi trả trong vòng 10 ngày</span>
                            </div>
                            <div className="policy" type="subtitle">Dịch vụ khác</div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/suachua.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/suachua.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Sửa chữa đồng giá 150.000đ.</span>
                            </div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/baotri.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/baotri.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Vệ sinh máy tính, laptop.</span>
                            </div>
                            <div style={{display: 'flex', marginBottom: '8px'}}>
                                {/*                <img src="../image/icon-product/camket.png" style="margin-right: 3px;line-height:normal">*/}
                                <div className="img-sale-policy"
                                     style={{backgroundImage: 'url("../image/icon-product/camket.png")'}}/>
                                <span style={{margin: 'auto 0 auto 0'}}>Bảo hành tại nhà.</span>
                            </div>
                        </div>
                    </div>
                    <div id="container">
                        <div className="body-content">
                            <div>
                                <div className="tabs">
                                    <a className="tab active" href="#">Thông số kỹ thuật</a>
                                </div>
                                <div className="tab-contents">
                                    <div className="tab-content active" data-tabidx={1}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table className="table-specs">
                                                    <tbody>
                                                    <tr>
                                                        <td> CPU</td>
                                                        <td> AMD Ryzen™ 5 5600H Processor (3.3GHz, 16MB Cache, Up to
                                                            4.2GHz, 6
                                                            Cores, 12 Threads)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Memory</td>
                                                        <td> 8GB DDr4 Bus 3200Mhz (2 Slot, 4GB x 02, Dual Chanel)</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Hard Disk</td>
                                                        <td> 512GB PCIe® NVMe™ M.2 SSD (Support x 1 Slot SSD M2 PCIe)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> VGA</td>
                                                        <td> NVIDIA® GeForce® GTX1650 with 4GB GDDR6 / AMD Radeon™
                                                            Graphics
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Display</td>
                                                        <td> 16.1 inch Full HD (1920 x 1080) 144Hz IPS Micro Edge Anti
                                                            Glare 250
                                                            Nits
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Other</td>
                                                        <td> HP Audio Boost B&amp;O Play, Webcam 720p, Backlit Keyboard,
                                                            Multi-Format SD Media Card Reader, Headphone/ Microphone
                                                            Combo, HDMI
                                                            2.1, RJ-45, SuperSpeed USB Type A 5Gbps Signaling Rate,
                                                            SuperSpeed USB
                                                            Type A 5Gbps Signaling Eate (HP Sleep and Charge),
                                                            SuperSpeed USB Type-C
                                                            5Gbps Signaling Rate (DisplayPort™ 1.4, HP Sleep and Charge)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Wireless</td>
                                                        <td> Intel Wi Fi 6 (802.11ax) + Bluetooth 5.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Battery</td>
                                                        <td> 4 Cells 70 Whrs Battery</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Weight</td>
                                                        <td> 2,40 Kg</td>
                                                    </tr>
                                                    <tr>
                                                        <td> SoftWare</td>
                                                        <td> Windows 10 Home SL 64bit</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Xuất xứ</td>
                                                        <td> Brand New 100%, Hàng Phân Phối Chính Hãng Tại Việt Nam, Bảo
                                                            Hành Chính
                                                            Hãng
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Màu sắc</td>
                                                        <td> Mica Silver</td>
                                                    </tr>
                                                    <tr>
                                                        <td> Bảo hành</td>
                                                        <td> 12 tháng</td>
                                                    </tr>
                                                    <tr>
                                                        <td> VAT</td>
                                                        <td> Đã bao gồm VAT</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <div>
                                                    <br/>
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
            </div>
        </>
    );
};

export default ProductPage;