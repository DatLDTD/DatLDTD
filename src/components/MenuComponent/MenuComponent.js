import React from 'react'
import ButtonComponent1 from '../ButtonComponent/Button1/ButtonComponent1'
import {faGlobeAsia, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faNewspaper, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronRight } from 'react-bootstrap-icons';
import './StyleMenu.scss'

class MenuComponent extends React.Component {
    submenuOnClick(text) {
        const subMenu1 = document.querySelector('.active-submenu-'+text)
        const subMenu = document.querySelectorAll('.menu-item-level0')
        subMenu.forEach(element => {
            if (element !== subMenu1)
                element.classList.remove('active')
        });
        subMenu1.classList.toggle('active')
    }
    render() {
        return (
            <ul className="main-menu-wrapper">
                <li className="menu-item-level0 active-submenu-1" >
                    <div className="text-wrapper" onClick={() => this.submenuOnClick(1)}>
                        <span>watches</span>
                        <ChevronRight className="icon-chev" />
                    </div>
                    <div className="has-level1">
                        <div className="menu-level1-container">
                            <ul className="menu-level1-wrapper">
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>CONSTELLATION</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>SEAMASTER</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>SPEADMASTER</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>DE VILLE</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>Find your OMEGA</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>Women's Selection</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>Man's Selection</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="/list-product">
                                        <div className="button1-container">
                                            <ButtonComponent1 text='watch finder' />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-level0">
                    <a href="#">
                        <span>nato straps</span>
                    </a>
                </li>
                <li className="menu-item-level0">
                    <a href="#">
                        <span>watch traps</span>
                    </a>
                </li>
                <li className="menu-item-level0 active-submenu-2">
                    <div className="text-wrapper" onClick={() => this.submenuOnClick(2)}>
                        <span>fine jewellery</span>
                        <ChevronRight className="icon-chev" />
                    </div>
                    <div className="has-level1">
                        <div className="menu-level1-container">
                            <ul className="menu-level1-wrapper">
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>CONSTELLATION</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>AQUA SWING</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>OMEGA FLOWER</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>LADYMATIC</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>OMEGA DEWDROP</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-level0 active-submenu-3">
                    <div className="text-wrapper" onClick={() => this.submenuOnClick(3)}>
                        <span>accessories</span>
                        <ChevronRight className="icon-chev" />
                    </div>
                    <div className="has-level1">
                        <div className="menu-level1-container">
                            <ul className="menu-level1-wrapper">
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>FINE LEATHER</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>BRACELETS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>CUFFLINKS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>EYEWEAR</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>BELTS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>KEYHOLDERS & OTHERS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>FINE FRAGRANCE</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-level0 fake-border-wrapper">
                    <div className="fake-border"></div>
                </li>
                <li className="menu-item-level0">
                    <a href="#">
                        <FontAwesomeIcon icon={faGlobeAsia} className="menu-icon" />
                        <span>planet omega</span>
                    </a>
                </li>
                <li className="menu-item-level0">
                    <a href="#">
                        <FontAwesomeIcon icon={faNewspaper} className="menu-icon" />
                        <span>news & stories</span>
                    </a>
                </li>
                <li className="menu-item-level0">
                    <a href="#">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="menu-icon" />
                        <span>store locator</span>
                    </a>
                </li>
                <li className="menu-item-level0 active-submenu-4">
                    <div className="text-wrapper" onClick={() => this.submenuOnClick(4)}>
                        <FontAwesomeIcon icon={faCommentDots} className="menu-icon" />
                        <span>customer service</span>
                        <ChevronRight className="icon-chev" />
                    </div>
                    <div className="has-level1">
                        <div className="menu-level1-container">
                            <ul className="menu-level1-wrapper">
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>INTERVENTIONS & PRICES</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>FINDING A SERVICE CENTRE</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>5‑YEAR WARRANTY</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>USER MANUALS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>CERTIFICATES & EXTRACTS</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>PRESERVE YOUR OMEGA</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>FAQ</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>GLOSSARY</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="#">
                                        <span>ORDER A CATALOG</span>
                                    </a>
                                </li>
                                <li className="menu-item-level1">
                                    <a href="/login">
                                        <div className="button1-container">
                                            <ButtonComponent1 text='contact us'/>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-level0">
                </li>
                <li className="menu-item-level0">
                </li>
            </ul>
        )
    }
}

export default MenuComponent