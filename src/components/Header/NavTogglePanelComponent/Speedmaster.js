import React from 'react'
import './StyleNavTogglePanel.scss'
import ButtonComponent2 from '../../ButtonComponent/Button2/ButtonComponent2'
import img1 from '../../../img/product/speedmaster/speedmaster-moonwatch-black.png'
import img2 from '../../../img/product/speedmaster/speedmaster-moonwatch-professional.png'
import img3 from '../../../img/product/speedmaster/speedmaster-moonwatch.png'
import img4 from '../../../img/product/speedmaster/speedmaster-racing.png'
import img5 from '../../../img/product/speedmaster/speedmaster-skywalker.png'
import img6 from '../../../img/product/speedmaster/speedmaster-speedmaster.png'


class Speedmaster extends React.Component {
    render() {
        return (
            <div className="toggle-container">
                <div className="wrapper">
                    <span className="title">Speedmaster</span>
                    <div className="product-container">
                        <a href="#" className="card-product">
                            <img alt="err" src={img1}></img>
                            <span>darkside of the moon</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img2}></img>
                            <span>heritage models</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img3}></img>
                            <span>moonwatch</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img4}></img>
                            <span>two counters</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img5}></img>
                            <span>instruments</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img6}></img>
                            <span>speadmaster 38</span>
                        </a>
                    </div>
                    <a className="button-container" href="#">
                        <ButtonComponent2 text='all speedmaster' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Speedmaster