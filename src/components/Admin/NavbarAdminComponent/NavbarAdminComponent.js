import React from 'react'

import { faUserTie, faList, faEllipsisV, faTable, faSortDown, faImage, faMoneyCheckAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { CaretDownFill } from 'react-bootstrap-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './StyleNavbar.scss'
class NavbarAdminComponent extends React.Component {
    buttonToggleOnclickHandle() {
        let navBar = document.querySelector('.nav-bar-container')
        navBar.classList.toggle('active')
    }
    menuLv1OnclickHandle(i) {
        let menuLv1 = document.querySelectorAll('.nav-bar-menu-lv1')
        menuLv1.forEach((element, index) => {
            if (index !== i)
                element.classList.remove('active')
        })
        menuLv1[i].classList.toggle('active')
    }
    menuLv2OnclickHandle(e, text) {
        let menuLv2 = document.querySelectorAll('.menu-lv2')
        menuLv2.forEach(element => {
            element.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        this.props.navigateBoard(text)
    }
    componentDidMount() {
        this.props.navigateBoard("Products")
    }
    render() {
        return (
            <div className="nav-bar-container active">
                <div className="nav-bar-wrapper">
                    <div className="nav-bar-top-part">
                        <FontAwesomeIcon icon={faUserTie} className="icon-admin icon-nav-bar" />
                        <span className="nav-bar-text">admin</span>
                    </div>
                    <div className="nav-bar-fake-div"></div>
                    <div className="nav-bar-bottom-part">
                        <ul className="menu-container">
                            <li className="nav-bar-menu-lv1 active">
                                <div className="title-menu-holder" onClick={() => this.menuLv1OnclickHandle(0)}>
                                    <FontAwesomeIcon icon={faTable} className="icon-nav-bar" />
                                    <span className="nav-bar-text">Tables</span>
                                    <CaretDownFill size={15} className="nav-bar-icon-down" />
                                </div>
                                <ul className="sub-menu-lv2-container">
                                    <li className="menu-lv2 active" onClick={(e) => this.menuLv2OnclickHandle(e, "Products")}>
                                        <div className="icon-wrapper">pd</div>
                                        <div className="nav-bar-text">Products</div>
                                    </li>
                                    <li className="menu-lv2" onClick={(e) => this.menuLv2OnclickHandle(e, "Collections")}>
                                        <div className="icon-wrapper">cl</div>
                                        <div className="nav-bar-text">Collections</div>
                                    </li>
                                    <li className="menu-lv2" onClick={(e) => this.menuLv2OnclickHandle(e, "Features")}>
                                        <div className="icon-wrapper">ft</div>
                                        <div className="nav-bar-text">Features</div>
                                    </li>
                                    <li className="menu-lv2" onClick={(e) => this.menuLv2OnclickHandle(e, "Materials")}>
                                        <div className="icon-wrapper">mt</div>
                                        <div className="nav-bar-text">Materials</div>
                                    </li>
                                    <li className="menu-lv2" onClick={(e) => this.menuLv2OnclickHandle(e, "Categories")}>
                                        <div className="icon-wrapper">ct</div>
                                        <div className="nav-bar-text">Categories</div>
                                    </li>
                                    <li className="menu-lv2" onClick={(e) => this.menuLv2OnclickHandle(e, "Advantages")}>
                                        <div className="icon-wrapper">av</div>
                                        <div className="nav-bar-text">Advantages</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-bar-menu-lv1">
                                <div className="title-menu-holder" onClick={() => this.menuLv1OnclickHandle(1)}>
                                    <FontAwesomeIcon icon={faImage} className="icon-nav-bar" />
                                    <span className="nav-bar-text">Posts</span>
                                    <CaretDownFill size={15} className="nav-bar-icon-down" />
                                </div>
                            </li>
                            <li className="nav-bar-menu-lv1">
                                <div className="title-menu-holder" onClick={() => this.menuLv1OnclickHandle(2)}>
                                    <FontAwesomeIcon icon={faChartBar} className="icon-nav-bar" />
                                    <span className="nav-bar-text">Charts</span>
                                    <CaretDownFill size={15} className="nav-bar-icon-down" />
                                </div>
                            </li>
                            <li className="nav-bar-menu-lv1">
                                <div className="title-menu-holder" onClick={() => {
                                    this.menuLv1OnclickHandle(3);
                                    this.props.navigateBoard("Bills")
                                }}>
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} className="icon-nav-bar" />
                                    <span className="nav-bar-text">Bills</span>
                                    <CaretDownFill size={15} className="nav-bar-icon-down" />
                                </div>
                            </li>
                            <li className="nav-bar-menu-lv1">
                                <div className="title-menu-holder" onClick={() => this.menuLv1OnclickHandle(4)}>
                                    <FontAwesomeIcon icon={faUsers} className="icon-nav-bar" />
                                    <span className="nav-bar-text">Users</span>
                                    <CaretDownFill size={15} className="nav-bar-icon-down" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="button-toggle-nav-bar" onClick={() => this.buttonToggleOnclickHandle()}>
                    <FontAwesomeIcon icon={faEllipsisV} className="button-icon-1" />
                    <FontAwesomeIcon icon={faList} className="button-icon-2" />
                </div>
            </div >
        )
    }
}

export default NavbarAdminComponent