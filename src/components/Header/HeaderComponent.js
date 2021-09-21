import React from 'react'
import { Search, Bag, Person } from 'react-bootstrap-icons';

import Constellation from './NavTogglePanelComponent/Constellation'
import Seamaster from './NavTogglePanelComponent/Seamaster'
import Speedmaster from './NavTogglePanelComponent/Speedmaster'
import Deville from './NavTogglePanelComponent/Deville'
import FindYourWatch from './NavToggleFindComponent/FindYourWatch'
import SearchContainer from '../../containers/SearchContainer'
import MenuComponent from '../MenuComponent/MenuComponent'
import LoginContainer from '../../containers/LoginContainer'
import BasketLiteContainer from '../../containers/BasketLiteContainer'
import Logo from '../../img/logo.png'
import './StyleHeader.scss'

let listBasket = JSON.parse(sessionStorage.getItem('listBasket'))
if (listBasket == null) listBasket = []
let total = 0
listBasket.forEach(item => {
    total = total + item.quantity
});
class ReactComponent extends React.Component {
    state = {
        openBasket: false
    }
    iconOnClickHandle(e, text) {
        const iconWrapper = document.querySelectorAll('.icon-wrapper')
        iconWrapper.forEach(element => {
            if (element !== e.currentTarget)
                element.classList.remove('active')
        })
        e.currentTarget.classList.toggle('active')
        const iconPanel = document.querySelector(text)
        const panelIcon = document.querySelectorAll('.toggle-panel-icon')
        panelIcon.forEach(ele => {
            if (ele !== iconPanel) ele.classList.remove('active')
        })
        iconPanel.classList.toggle('active')
        const filterDiv = document.querySelector('.filter-black3')
        const iconWrapperCheck = document.querySelectorAll('.toggle-panel-icon.active')
        if (iconWrapperCheck.length !== 0) {
            filterDiv.classList.add('active')
        }
        else {

            filterDiv.classList.remove('active')
        }

        //close menu 
        {
            const bar2 = document.querySelector('.bar-2')
            bar2.classList.remove('hidden')

            const bar1 = document.querySelector('.bar-1')
            bar1.classList.remove('active')

            const bar3 = document.querySelector('.bar-3')
            bar3.classList.remove('active')

            const textOpen = document.querySelector('.text-open')
            textOpen.classList.remove('hidden')

            const textClose = document.querySelector('.text-close')
            textClose.classList.add('hidden')

            const mainMenu = document.querySelector('.main-menu-container')
            mainMenu.classList.remove('active')

            const filterDiv = document.querySelector('.filter-black')
            filterDiv.classList.remove('active')
        }

    }
    async basketOnclickHandle() {
        let bag = document.querySelector('.panel-cart.active')
        if (bag == null) await this.setState({ openBasket: false })
        else await this.setState({ openBasket: true })
        console.log(this.state.openBasket)
    }
    buttonMenuHandle() {

        const bar2 = document.querySelector('.bar-2')
        bar2.classList.toggle('hidden')

        const bar1 = document.querySelector('.bar-1')
        bar1.classList.toggle('active')

        const bar3 = document.querySelector('.bar-3')
        bar3.classList.toggle('active')

        const textOpen = document.querySelector('.text-open')
        textOpen.classList.toggle('hidden')

        const textClose = document.querySelector('.text-close')
        textClose.classList.toggle('hidden')

        const mainMenu = document.querySelector('.main-menu-container')
        mainMenu.classList.toggle('active')

        const subMenuActive = document.querySelectorAll('.menu-item-level0.active')
        if (subMenuActive.length === 0) {
            const subMenu1 = document.querySelector('.active-submenu-1')
            subMenu1.classList.add('active')
        }

        const filterDiv = document.querySelector('.filter-black')
        filterDiv.classList.toggle('active')

        //close panel icon
        const panelIcon = document.querySelectorAll('.toggle-panel-icon')
        panelIcon.forEach(ele => {
            ele.classList.remove('active')
        })

        const iconWrapper = document.querySelectorAll('.icon-wrapper')
        iconWrapper.forEach(element => {
            element.classList.remove('active')
        })

        const filterDiv3 = document.querySelector('.filter-black3')
        filterDiv3.classList.remove('active')
    }
    bottomMenuOnMouseMoveHandle() {
        const panel = document.querySelector('.navbar-toggle-panel-container')
        panel.classList.add('active')


        const filterDiv = document.querySelector('.filter-black2')
        filterDiv.classList.add('active')

    }
    bottomMenuOnMouseLeaveHandle() {
        const panel = document.querySelector('.navbar-toggle-panel-container')
        panel.classList.remove('active')


        const filterDiv = document.querySelector('.filter-black2')
        filterDiv.classList.remove('active')

    }
    panelChildOnMouseHandle(text) {
        const panelChild = document.querySelectorAll('.panel-child')
        panelChild.forEach(element => {
            element.classList.remove('active')
        })
        const child = document.querySelector(text)
        child.classList.add('active')
        if (text === '.findyourwatch') {
            const panel = document.querySelector('.navbar-toggle-panel-container')
            panel.classList.add('activeFindPanel')
        } else {
            const panel = document.querySelector('.navbar-toggle-panel-container')
            panel.classList.remove('activeFindPanel')
        }

        if (text === '.search-bar') {
            const panel = document.querySelector('.navbar-toggle-panel-container')
            panel.classList.add('activeSearchBar')
        } else {
            const panel = document.querySelector('.navbar-toggle-panel-container')
            panel.classList.remove('activeSearchBar')
        }
    }
    render() {
        return (
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="logo-wrapper">
                        <a href="/">
                            <img alt="err" src={Logo} />
                        </a>
                    </div>
                    <div className="top-part child">
                        <div className="button-menu-wrapper" onClick={(e) => this.buttonMenuHandle()}>
                            <div className="bar-wrapper">
                                <div className="bar bar-1"></div>
                                <div className="bar bar-2"></div>
                                <div className="bar bar-3"></div>
                            </div>
                            <div className="text-wrapper">
                                <span className="text-open">menu</span>
                                <span className="text-close hidden">close</span>
                            </div>
                        </div>
                        <div className="sticker-bar-wrapper">
                            <div className="icon-wrapper" onClick={(e) => this.iconOnClickHandle(e, '.panel-search')}>
                                <Search className="search icon-item" />
                                <div className="sticky-bar bar1"></div>
                                <div className="sticky-bar bar2"></div>
                            </div>
                            <div className="icon-wrapper" onClick={(e) => { this.iconOnClickHandle(e, '.panel-cart'); this.basketOnclickHandle() }}>
                                <Bag className="icon-item" />
                                <div className="sticky-bar bar1"></div>
                                <div className="sticky-bar bar2"></div>
                                {
                                    total == 0
                                        ?
                                        null
                                        :
                                        <div className="total-basket">
                                            <span>{total}</span>
                                        </div>
                                }

                            </div>
                            <div className="icon-wrapper" onClick={(e) => this.iconOnClickHandle(e, '.panel-user')}>
                                <Person className="user icon-item" size={26} />
                                <div className="sticky-bar bar1"></div>
                                <div className="sticky-bar bar2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-part child">
                        <div className="bottom-part-wrapper" onMouseMove={() => this.bottomMenuOnMouseMoveHandle()}
                            onMouseLeave={() => this.bottomMenuOnMouseLeaveHandle()}>
                            <div className="bottom-part-child" onMouseMove={() => this.panelChildOnMouseHandle('.constellation')}>
                                <span>CONSTELLATION</span>
                            </div>
                            <div className="bottom-part-child" onMouseMove={() => this.panelChildOnMouseHandle('.seamaster')}>
                                <span>SEAMASTER</span>
                            </div>
                            <div className="bottom-part-child" onMouseMove={() => this.panelChildOnMouseHandle('.speedmaster')}>
                                <span>SPEADMASTER</span>
                            </div>
                            <div className="bottom-part-child" onMouseMove={() => this.panelChildOnMouseHandle('.deville')}>
                                <span>DE VILLE</span>
                            </div>
                            <div className="bottom-part-child" onMouseMove={() => this.panelChildOnMouseHandle('.findyourwatch')}>
                                <span>Find your OMEGA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-toggle-panel-container" onMouseOver={() => this.bottomMenuOnMouseMoveHandle()}
                    onMouseLeave={() => this.bottomMenuOnMouseLeaveHandle()}>
                    <div className="panel-child constellation">
                        <Constellation />
                    </div>
                    <div className="panel-child seamaster">
                        <Seamaster />
                    </div>
                    <div className="panel-child speedmaster">
                        <Speedmaster />
                    </div>
                    <div className="panel-child deville">
                        <Deville />
                    </div>
                    <div className="panel-child findyourwatch">
                        <FindYourWatch />
                    </div>

                </div>
                <div className="toggle-panel-icon panel-search">
                    <div className="panel-icon-child">
                        <SearchContainer />
                    </div>
                </div>
                <div className="toggle-panel-icon panel-cart">
                    <div className="panel-icon-child">
                        {
                            this.state.openBasket === true
                                ?
                                <BasketLiteContainer />
                                :
                                null
                        }
                    </div>
                </div>
                <div className="toggle-panel-icon panel-user">
                    <div className="panel-icon-child">
                        <h1><a href="/login">my omega</a></h1>
                        <LoginContainer />
                    </div>
                </div>
                <div className="filter-black3"></div>
                <div className="filter-black2">
                </div>
                <div className="main-menu-container">
                    <MenuComponent />
                </div>
                <div className="filter-black">
                </div>
            </div>
        )
    }
}

export default ReactComponent