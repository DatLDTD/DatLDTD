import React from 'react'
import './StyleNavTogglePanel.scss'
import ButtonComponent2 from '../../ButtonComponent/Button2/ButtonComponent2'
import img1 from '../../../img/product/deville/de-ville-ladymatic.png'
import img2 from '../../../img/product/deville/de-ville-hour-vision.png'
import img3 from '../../../img/product/deville/de-ville-tresor.png'
import img4 from '../../../img/product/deville/de-ville-prestige.png'
import img5 from '../../../img/product/deville/de-ville-tourbillon.png'


class Deville extends React.Component {
    render() {
        return (
            <div className="toggle-container">
                <div className="wrapper">
                    <span className="title">De Ville</span>
                    <div className="product-container">
                        <a href="#" className="card-product">
                            <img alt="err" src={img1}></img>
                            <span>ladymatic</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img2}></img>
                            <span>hour vision</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img3}></img>
                            <span>tresór</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img4}></img>
                            <span>prestige</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img5}></img>
                            <span>tourbillon</span>
                        </a>
                    </div>
                    <a className="button-container" href="#"> 
                        <ButtonComponent2 text='all de ville' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Deville