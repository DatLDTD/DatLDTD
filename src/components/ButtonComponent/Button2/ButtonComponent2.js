import React from 'react'
import './StyleButton2.scss'

class ButtonComponent2 extends React.Component {
    render() {
        return (
            <div className="button2-wrapper">       
                <div className="text-holder">
                    {this.props.text}
                </div>
                <div className="fake-boder"></div>
            </div>
        )
    }
}

export default ButtonComponent2