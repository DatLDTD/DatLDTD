import React from 'react'
import './StyleNavTogglePanel.scss'
import ButtonComponent2 from '../../ButtonComponent/Button2/ButtonComponent2'
import img1 from '../../../img/product/constellation/constellation-constell.png'
import img2 from '../../../img/product/constellation/constellation-globemaster.png'
class Constellation extends React.Component {
    render() {
        return (
            <div className="toggle-container">
                <div className="wrapper">
                    <span className="title">Constellation</span>
                    <div className="product-container">
                        <a href="#" className="card-product">
                            <img alt="err" src={img1}></img>
                            <span>globe master</span>
                        </a>
                        <a href="#" className="card-product">
                            <img alt="err" src={img2}></img>
                            <span>constellation</span>
                        </a>
                    </div>
                    <a className="button-container" href="#">
                        <ButtonComponent2 text='all constellation' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Constellation