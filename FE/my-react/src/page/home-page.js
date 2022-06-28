import React, {useEffect, useRef, useState} from 'react';
import '../css/style.css'
import Slider1 from '../image/slider/Slider-image1.jpg'
import Slider2 from '../image/slider/Slider-image2.jpg'
import Slider3 from '../image/slider/Slider-image3.jpg'
import Slider4 from '../image/slider/Slider-image4.jpg'
import Slider5 from '../image/slider/Slider-image5.jpg'
import Poster from '../image/poster/dell/dell.png'
import Item from '../image/dell/dell1/dell1.png'
import Header from "../component/Header";

const HomePage = () => {
    let sliderImage = document.querySelectorAll('.slider-image')
    let arrowLeft = document.querySelector('.previous')
    let arrowRight = document.querySelector('.next')
    let curren = 0;
    let timeOut = 0;

    const[count, setCount] = useState(0)

    useEffect(() => {
        setCount(1)
    }, [])

    if (count === 1) {
        function reset() {
            for (let i = 0; i < sliderImage.length; i++) {
                sliderImage[i].style.display = 'none';
            }
        }

        function startSlide() {
            reset();
            if (curren === sliderImage.length - 1) {
                curren = -1;
            }
            sliderImage[curren + 1].style.display = 'block';
            curren++;
            timeOut = setTimeout(startSlide, 5000)
        }


        function showLeft() {
            reset();
            sliderImage[curren - 1].style.display = 'block';
            curren--;
            window.clearTimeout(timeOut);
            timeOut = setTimeout(startSlide, 5000);
        }

        function showRight() {
            reset();
            sliderImage[curren + 1].style.display = 'block';
            curren++;
            window.clearTimeout(timeOut);
            timeOut = setTimeout(startSlide, 5000);
        }

        if (arrowLeft) {
            arrowLeft.addEventListener('click', function () {
                if (curren === 0) {
                    curren = sliderImage.length;
                }
                showLeft();
            })
        }

        if (arrowRight) {
            arrowRight.addEventListener('click', function () {
                if (curren === sliderImage.length - 1) {
                    curren = -1;
                }
                showRight();
            })
        }

        startSlide();
    }


    return (
        <>
            <Header/>
            <div id="main">
                <div className="hover-cart" id="cart-hover">
                    <div className="cover-cart-item">
                        <div className="cart-item">
                            <div className="img-cart-item"
                                 style={{backgroundImage: 'url("image/dell/dell1/dell1.png")'}}/>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5
                                    ms)
                                </div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item"
                                 style={{backgroundImage: 'url("")'}}/>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5
                                    ms)
                                </div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item"
                                 style={{backgroundImage: 'url("image/dell/dell1/dell1.png")'}}/>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5
                                    ms)
                                </div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item"
                                 style={{backgroundImage: 'url("image/dell/dell1/dell1.png")'}}/>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5
                                    ms)
                                </div>
                                <div className="num-cart-item">Số lượng: 2</div>
                                <div className="price-cart-item">5.620.000đ</div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-cart-item"
                                 style={{backgroundImage: 'url("image/dell/dell1/dell1.png")'}}/>
                            <div className="details-cart-item">
                                <div className="infor-cart-item">Màn hình LCD VIEWSONIC VP2458 (1920 x 1080/IPS/60Hz/5
                                    ms)
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
                        <div className="btn-view-cart" role="button"><a className="btn-tt" href="html/cart.html">Xem giỏ
                            hàng</a></div>
                    </div>
                </div>
                <div id="slider">
                    <div className="slider-image" style={{backgroundImage: "url(" + Slider1 + ")"}}/>
                    <div className="slider-image" style={{backgroundImage: "url(" + Slider2 + ")"}}/>
                    <div className="slider-image" style={{backgroundImage: "url(" + Slider3 + ")"}}/>
                    <div className="slider-image" style={{backgroundImage: "url(" + Slider4 + ")"}}/>
                    <div className="slider-image" style={{backgroundImage: "url(" + Slider5 + ")"}}/>
                    <button  className="btn-slider previous"><i className="fas fa-chevron-left"/></button>
                    <button  className="btn-slider  next"><i className="fas fa-chevron-right"/></button>
                    <div className="slider-element">
                        <div className="slider-items slider-left"/>
                        <div className="slider-items slider-center"/>
                        <div className="slider-items slider-right"/>
                    </div>
                </div>
                <div id="content">
                    <div className="outstanding-brand">
                        <div className="outstading-brand-main">
                            <div className="title-outstanding">
                                <div className="border-outstanding"/>
                                <div className="title-main">Thương hiệu nổi bật</div>
                            </div>
                            <div className="outstand-product">
                                <div className="outstand-product-items">
                                    <a className="click-css" href>
                                        <div className="img-outstand outstand1">
                                        </div>
                                    </a>
                                    <div className="title-outstand">Lenovo</div>
                                </div>
                                <div className="outstand-product-items">
                                    <a className="click-css" href>
                                        <div className="img-outstand outstand2">
                                        </div>
                                    </a>
                                    <div className="title-outstand">Asus</div>
                                </div>
                                <div className="outstand-product-items">
                                    <a className="click-css" href>
                                        <div className="img-outstand outstand3">
                                        </div>
                                    </a>
                                    <div className="title-outstand">Msi</div>
                                </div>
                                <div className="outstand-product-items">
                                    <a className="click-css" href>
                                        <div className="img-outstand outstand4"/>
                                    </a>
                                    <div className="title-outstand">HP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-biggest">
                            <div className="product-item-big">
                                <div className="title-product">
                                    <div className="border-product"/>
                                    <div className="title-main-product">DELL (Don't go there. Go to Dell.)</div>
                                    <a className="view-all" href="html/all-product.html">Xem tất cả <i
                                        className="fas fa-angle-right"/></a>
                                </div>
                                <div className="product-cover">
                                    <div style={{overflow: 'hidden', borderRadius: '0 0 0 10px'}}>
                                        <a className="product-hover-selling" href>
                                            <div className="product-selling"
                                                 style={{backgroundImage: "url(" + Poster + ")"}}/>
                                        </a></div>
                                    <div className="product-item-cover">
                                        <a className="product-hover-items" href="html/product-page.html">
                                            <div className="product-items  border-item-top1">
                                                <div className="title-product-item">
                                                    DELL VOSTRO 14 3405
                                                </div>
                                                <div className="slogan-item">
                                                    15.000.000 VND
                                                </div>
                                                <div className="img-product-item"
                                                     style={{backgroundImage: "url(" + Item + ")"}}>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="product-hover-items" href="html/product-page.html">
                                            <div className="product-items border-item-top2">
                                                <div className="title-product-item">
                                                    DELL INSPIRON 15 3511
                                                </div>
                                                <div className="slogan-item">
                                                    16.500.000 VND
                                                </div>
                                                <div className="img-product-item"
                                                     style={{backgroundImage: "url(" + Item + ")"}}>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="product-hover-items" href="html/product-page.html">
                                            <div className="product-items border-item-bottom1">
                                                <div className="title-product-item">
                                                    DELL INSPIRON 14 5410
                                                </div>
                                                <div className="slogan-item">
                                                    18.900.000 VND
                                                </div>
                                                <div className="img-product-item"
                                                     style={{backgroundImage: "url(" + Item + ")"}}>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="product-hover-items" href="html/product-page.html">
                                            <div className="product-items  border-item-bottom2">
                                                <div className="title-product-item">
                                                    DELL ALIENWARE M15 R6
                                                </div>
                                                <div className="slogan-item">
                                                    23.960.000 VND
                                                </div>
                                                <div className="img-product-item"
                                                     style={{backgroundImage: "url(" + Item + ")"}}/>
                                            </div>
                                        </a>
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

export default HomePage;