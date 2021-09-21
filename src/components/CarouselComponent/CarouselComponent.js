import React from 'react'
import ButtonComponent1 from '../ButtonComponent/Button1/ButtonComponent1'
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import img from '../../img/carousel/carousel-img-2-child.png'
import './StyleCarousel.scss'
var currentSlide = 0;
var myTimer;
var manualSlide;
class CarouselComponent extends React.Component {
    componentDidMount() {
        // auto manualSile
        let slides = document.querySelectorAll('.carousel-cuabomay-item')
        let btns = document.querySelectorAll('.button-navigate')
        clearTimeout(myTimer)
        manualSlide = async function (index) {
            clearTimeout(myTimer)
            slides.forEach(slide => {
                slide.classList.remove('active')
            })
            btns.forEach(btn => {
                btn.classList.remove('active')
            })
            slides[index].classList.add('active')
            btns[index].classList.add('active')
            currentSlide = index
            let auto = await document.querySelector('.button-auto-navigate-value.active')
            if (auto !== null) {
                myTimer = setTimeout(async function () {
                    let auto = await document.querySelector('.button-auto-navigate-value.active')
                    if (auto == null) return
                    if (currentSlide === slides.length - 1) {
                        currentSlide = 0
                    } else {
                        currentSlide++
                    }
                    manualSlide(currentSlide)
                }, 7000)
            }
        }
        // click to manualSlide
        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualSlide(i)
                clearTimeout(myTimer)
            })
        })
        manualSlide(currentSlide)
        // drag to manualSlide
        let wrapper = document.querySelector('.carousel-wrapper')
        let isDown = false
        let startX
        let walk
        wrapper.addEventListener('mousedown', (e) => {
            isDown = true
            startX = e.pageX - wrapper.offsetLeft;
        })
        wrapper.addEventListener('mouseleave', () => {
            isDown = false
        })
        wrapper.addEventListener('mouseup', () => {
            isDown = false
            if (walk >= 75) {
                if (currentSlide === 0) manualSlide(slides.length - 1)
                else manualSlide(currentSlide - 1)
            }
            if (walk <= -75) {
                if (currentSlide === slides.length - 1) manualSlide(0)
                else manualSlide(currentSlide + 1)
            }
            walk = 0
        })
        wrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return
            e.preventDefault();
            let x = e.pageX - wrapper.offsetLeft
            walk = x - startX
        })
    }
    btnPauseOnclickHandle(e) {
        e.currentTarget.classList.toggle('active');
        let auto = document.querySelector('.button-auto-navigate-value.active')
        if (auto !== null) {
            manualSlide(currentSlide)
        }
    }
    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-cuabomay-item slider-1 active">
                        <div className="title-button-container">
                            <span>Speedmaster</span>
                            <span>MOONWATCH</span>
                            <span>THE LEGACY CONTINUES</span>
                            <a href="#">
                                <div className="button3-container">
                                    <ButtonComponent3 text="discover the new generation" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-cuabomay-item slider-2">
                        <div className="title-button-container">
                            <img alt="err" src={require('../../img/carousel/carousel-img-2-child.png')} />
                            <span>Seamaster</span>
                            <span>AQUA TERRA</span>
                            <span>EDDIE REDMAYNE'S CHOICE</span>
                            <a href="#">
                                <div className="button3-container">
                                    <ButtonComponent3 text="discover the collection" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-cuabomay-item slider-3">
                        <div className="title-button-container">
                            <span>Seamaster</span>
                            <span>DIVER 300M</span>
                            <span>MASTER CHRONOMETER CERTIFIED</span>
                            <a href="#">
                                <div className="button3-container">
                                    <ButtonComponent1 text="discover the collection" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="button-control-carousel-container">
                        <div className="button-auto-navigate-value active" onClick={(e) => this.btnPauseOnclickHandle(e)}>
                            <div className="auto-true">
                                <div className="fakeDiv"></div>
                                <div className="fakeDiv"></div>
                            </div>
                            <div className="auto-false"></div>
                        </div>
                        <div className="button-navigate active"></div>
                        <div className="button-navigate"></div>
                        <div className="button-navigate"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselComponent