import React from 'react'

import CardProductContainer from '../../containers/CardProductContainer'
import './StyleSlider.scss'

class SliderComponent extends React.Component {

    render() {
        let listSuggest = []
        if (this.props.listSuggest) {
            listSuggest = this.props.listSuggest.map((item, key) => {
                return (
                    <div key={key} className="product-wrapper">
                        <CardProductContainer product={item} />
                    </div>
                )
            })
        }
        return (
            <div className="slider-container">
                <div className="slider-wrapper">
                    {listSuggest}
                </div>
            </div>
        )
    }
}

export default SliderComponent