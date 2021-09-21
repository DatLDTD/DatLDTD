import React from 'react'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

import './StyleDetailProduct.scss'
var akay = false
var currentImage = 0
class AdmDetailProductComponent extends React.Component {
    componentDidMount() {
        let navImages = document.querySelectorAll('.nav-image-container')
        let detailImages = document.querySelectorAll('.detail-img-container')
        var manualImage = function (index) {
            navImages.forEach(navImage => {
                navImage.classList.remove('active')
            })
            detailImages.forEach(detailImage => {
                detailImage.classList.remove('active')
            })
            currentImage = index
            detailImages[index].classList.add('active')
            navImages[index].classList.add('active')
        }
        navImages.forEach((navImage, i) => {
            navImage.addEventListener('click', () => {
                manualImage(i)
            })
        })

        let isDown = false
        let startX
        let startY
        let walkX
        let walkY
        detailImages.forEach(detailImage => {
            detailImage.addEventListener('mousedown', (e) => {
                isDown = true
                startX = e.pageX - detailImage.offsetLeft;
                startY = e.pageY - detailImage.offsetTop;
            })
            detailImage.addEventListener('mouseleave', () => {
                isDown = false
            })
            detailImage.addEventListener('mouseup', () => {
                isDown = false
                if (walkX >= 50) {
                    if (currentImage === 0) manualImage(detailImages.length - 1)
                    else manualImage(currentImage - 1)
                }
                if (walkX <= -50) {
                    if (currentImage === detailImages.length - 1) manualImage(0)
                    else manualImage(currentImage + 1)
                }
                walkX = 0

                if (walkY >= 50) {
                    if (currentImage === 0) manualImage(detailImages.length - 1)
                    else manualImage(currentImage - 1)
                }
                if (walkY <= -50) {
                    if (currentImage === detailImages.length - 1) manualImage(0)
                    else manualImage(currentImage + 1)
                }
                walkY = 0
            })
            detailImage.addEventListener('mousemove', (e) => {
                if (!isDown) return
                e.preventDefault();
                let x = e.pageX - detailImage.offsetLeft
                walkX = x - startX

                let y = e.pageY - detailImage.offsetTop
                walkY = y - startY
            })
        })
    }
    btnHandle() {
        let mediaWrap = document.querySelector('.product-image-media-wrapper')
        mediaWrap.classList.remove('active')
        let body = document.querySelector('.body')
        body.style = 'overflow-y:scroll'
        akay = false
    }
    imgHandle() {
        if (akay === true) {
            return
        }
        else {
            let mediaWrap = document.querySelector('.product-image-media-wrapper')
            mediaWrap.classList.add('active')
            let body = document.querySelector('.body')
            body.style.overflow = 'hidden'
            let detailImg = document.querySelector('.detail-image-wrapper')
            detailImg.scrollTo(0, mediaWrap.scrollHeight / 2 - 35)
        }
    }
    btnMinusOnclickHandle(e) {
        if (e.currentTarget.classList[2] === "click-able") {
            let btnPlus = document.querySelector('.btn-plus')
            btnPlus.classList.remove('un-click-able')
            btnPlus.classList.add('click-able')
            let quantityWrap = document.querySelector('.quantity-value-wrapper')
            let i = quantityWrap.innerHTML
            i--
            quantityWrap.innerHTML = i
            if (i == 1) {
                e.currentTarget.classList.remove('click-able')
                e.currentTarget.classList.add('un-click-able')
            }
        }
    }
    btnPlusOnclickHandle(e) {
        if (e.currentTarget.classList[2] === "click-able") {
            let btnMinus = document.querySelector('.btn-minus')
            btnMinus.classList.remove('un-click-able')
            btnMinus.classList.add('click-able')
            let quantityWrap = document.querySelector('.quantity-value-wrapper')
            let i = quantityWrap.innerHTML
            i++
            quantityWrap.innerHTML = i
            if (i == this.props.currentProduct.productQuantity) {
                e.currentTarget.classList.remove('click-able')
                e.currentTarget.classList.add('un-click-able')
            }
        }
    }
    tableItemOnclickHandle(e) {
        let sizeValue = document.querySelector('.value')
        sizeValue.innerHTML = e.target.innerHTML + " inches"
        let tableItem = document.querySelectorAll('.table-item')
        tableItem.forEach(element => {
            element.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
        let braceLetSizeWrapper = document.querySelector('.bracelet-size-wrapper')
        braceLetSizeWrapper.classList.remove('active')
    }
    tableItemStandardOnclickHandle(e) {
        let sizeValue = document.querySelector('.value')
        sizeValue.innerHTML = 7.70 + " inches"
        let tableItem = document.querySelectorAll('.table-item')
        tableItem.forEach(element => {
            element.classList.remove('selected')
        })
        e.currentTarget.classList.add('selected')
        let braceLetSizeWrapper = document.querySelector('.bracelet-size-wrapper')
        braceLetSizeWrapper.classList.remove('active')
    }
    selectSizeOnclickHandle() {
        let braceLetSizeWrapper = document.querySelector('.bracelet-size-wrapper')
        braceLetSizeWrapper.classList.toggle('active')
        let tableItem = document.querySelector('.table-item.selected')
        if (tableItem == null) {
            let standard = document.querySelector('.standard-size')
            standard.classList.add('selected')
            let sizeValue = document.querySelector('.value')
            sizeValue.innerHTML = 7.70 + " inches"
        }
    }
    render() {
        let listNavImage = []
        listNavImage = this.props.currentProduct.productImage.Images.detailImage.map((item, key) => {
            return (
                (key === 0)
                    ?
                    <div key={key} className="nav-image-container active">
                        <img className="nav-img" alt="err" src={item} />
                    </div>
                    :
                    <div key={key} className="nav-image-container">
                        <img className="nav-img" alt="err" src={item} />
                    </div>
            )
        })
        let listImage = []
        listImage = this.props.currentProduct.productImage.Images.detailImage.map((item, key) => {
            return (
                (key === 0)
                    ?
                    <div key={key} className="detail-img-container active">
                        <img onClick={() => this.imgHandle()} className="detail-img" alt="err" src={item} />
                    </div>
                    :
                    <div key={key} className="detail-img-container">
                        <img onClick={() => this.imgHandle()} className="detail-img" alt="err" src={item} />
                    </div>
            )
        })
        let listFeature = []
        listFeature = this.props.currentProduct.productFeatures.map((item, key) => {
            return (
                <span key={key} className="feature">{item}</span>
            )
        })
        return (
            <div className="detail-product-container">
                <div className="detail-product-wrapper">
                    <div className="product-info-top-wrapper">
                        <div className="product-image-media-wrapper">
                            <div className="button-exit-container" onClick={() => this.btnHandle()}>
                                <div className="button-exit-child-1"></div>
                                <div className="button-exit-child-2"></div>
                            </div>
                            <div className="navbar-image-wrapper">
                                {listNavImage}
                            </div>
                            <div className="detail-image-wrapper">
                                {listImage}
                            </div>
                        </div>
                        <div className="product-main-info-container">
                            <div className="product-main-info-wrapper">
                                <span className="collection-container">{this.props.currentProduct.productCollection}</span>
                                <span className="sub-collection-container">{this.props.currentProduct.productSubCollection}</span>
                                <div className="name-container">
                                    <span>{this.props.currentProduct.productName}</span>

                                </div>
                                <span className="size-container">{this.props.currentProduct.productTechnicalData.CaseDiameter}</span>
                                <div className="main-infor-bottom">
                                    <a href="#detail" >
                                        <div className="review-container">
                                            Detail
                                        </div>
                                    </a>
                                    <div className="fake-border-detail"></div>
                                    <div className="material-container">
                                        <span>{this.props.currentProduct.productTechnicalData.Case}</span>
                                        <span>on</span>
                                        <span>{this.props.currentProduct.productTechnicalData.Bracelet}</span>
                                    </div>
                                    <div className="price-container">
                                        <div className="price-was">
                                            <span>Was:</span>
                                            <FontAwesomeIcon icon={faDollarSign} className="dollar-icon" />
                                            <span className="this-span">{this.props.currentProduct.productPrice}</span>
                                        </div>
                                        <div className="price-sale">
                                            <FontAwesomeIcon icon={faDollarSign} className="dollar-icon" />
                                            <span>{this.props.currentProduct.productPrice - this.props.currentProduct.productPrice * this.props.currentProduct.productSale / 100}</span>
                                            <span>({this.props.currentProduct.productSale}% sale off)</span>
                                        </div>
                                    </div>
                                    <div className="fake-border-detail"></div>
                                    <div className="quantity-bracelet-container">
                                        <div className="quantity-container">
                                            <span>Quantity</span>
                                            <div className="quantity-wrapper">
                                                <div className="btn-minus btn-quantity un-click-able" onClick={(e) => this.btnMinusOnclickHandle(e)}><span>-</span></div>
                                                <div className="quantity-value-wrapper">1</div>
                                                <div className="btn-plus btn-quantity click-able" onClick={(e) => this.btnPlusOnclickHandle(e)}><span>+</span></div>
                                            </div>
                                        </div>
                                        <div className="bracelet-size-container">
                                            <span>Bracelet Size</span>
                                            <div className="bracelet-size-wrapper">
                                                <div className="size-value" onClick={() => this.selectSizeOnclickHandle()}>
                                                    <div className="value">Select?</div>
                                                    <div className="button-toggle-container">
                                                        <ChevronUp />
                                                        <ChevronDown />
                                                    </div>
                                                </div>
                                                <div className="drop-down-table-of-size">
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>5.10</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>5.30</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>5.50</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>5.70</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>5.90</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>6.10</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>6.30</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>6.50</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>6.70</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>6.90</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>7.10</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>7.30</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>7.50</div>
                                                    <div className="table-item standard-size" onClick={(e) => this.tableItemStandardOnclickHandle(e)}>
                                                        <span>Standard</span>
                                                        <span>7.70</span>
                                                    </div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>7.90</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>8.10</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>8.30</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>8.50</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>8.70</div>
                                                    <div className="table-item" onClick={(e) => this.tableItemOnclickHandle(e)}>8.90</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="button-3-container">
                                        <ButtonComponent3 text="add to bag" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <a id="detail">
                        <div className="product-info-bottom-wrapper">
                            <div className="description-container">
                                <h3>description</h3>
                                <p>{this.props.currentProduct.productDescrible}</p>
                            </div>
                            <div className="info-bottom-right-side-container">
                                <div className="fake-border-bottom-part"></div>
                                <div className="warranty-wrapper">
                                    <h5>5-year warranty</h5>
                                    <p>All OMEGA watches are delivered with a 5-year warranty that covers the repair of any material or manufacturing defects. Please refer to the operating instructions for specific information about the warranty conditions and restrictions.</p>
                                </div>
                                <div className="fake-border-bottom-part"></div>
                                <div className="features-container">
                                    <h5>features</h5>
                                    <div className="features-wrapper">{listFeature}</div>
                                </div>
                                <div className="fake-border-bottom-part"></div>
                                <div className="technical-data-container">
                                    <h5>technical data</h5>
                                    <div className="technical-data-wrapper">
                                        <div>
                                            <span className="technical-data">Bracelet:</span>
                                            <span className="technical-data-value">{this.props.currentProduct.productTechnicalData.Bracelet}</span>
                                        </div>
                                        <div>
                                            <span className="technical-data">Case:</span>
                                            <span className="technical-data-value">{this.props.currentProduct.productTechnicalData.Case}</span>
                                        </div>
                                        <div>
                                            <span className="technical-data">Case diameter:</span>
                                            <span className="technical-data-value">{this.props.currentProduct.productTechnicalData.CaseDiameter}</span>
                                        </div>
                                        <div>
                                            <span className="technical-data">Dial colour:</span>
                                            <span className="technical-data-value">{this.props.currentProduct.productTechnicalData.DialColour}</span>
                                        </div>
                                        <div>
                                            <span className="technical-data">Water resistance:</span>
                                            <span className="technical-data-value">{this.props.currentProduct.productTechnicalData.WaterResistance}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fake-border-bottom-part"></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default AdmDetailProductComponent