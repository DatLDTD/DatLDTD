import React from 'react'
import './StyleNavTogglePanel.scss'
import ButtonComponent2 from '../../ButtonComponent/Button2/ButtonComponent2'
import img1 from '../../../img/product/seamaster/seamaster-aqua-terra-150m.png'
import img2 from '../../../img/product/seamaster/seamaster-diver-300m.png'
import img3 from '../../../img/product/seamaster/seamaster-planet-ocean-600m.png'
import img4 from '../../../img/product/seamaster/seamaster-seamaster-300m.png'

class Seamaster extends React.Component {
    render() {
        return (
            <div className="toggle-container">
                <div className="wrapper">
                    <span className="title">Seamaster</span>
                    <div className="product-container">
                        <a href="#" className="card-product">
                            <img alt="err" src={img1}></img>
                            <span>aqua terra</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img2}></img>
                            <span>diver 300m</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img3}></img>
                            <span>planet ocean</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img4}></img>
                            <span>heritage models</span>
                        </a>
                    </div>
                    <a className="button-container" href="#">
                        <ButtonComponent2 text='all seamaster' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Seamaster