import React from 'react'
import './StyleButton3.scss'

class ButtonComponent1 extends React.Component {
    onClickHandle(e) {
        let span = document.createElement('span');
        span.style.left = '50%';
        span.style.top = '50%';
        // console.log(e.view)
        // console.log({clientX: e.clientX})
        // console.log({currentoffLeft: e.currentTarget.offsetLeft})
        // console.log({containeroffLeft: btnContainer.offsetLeft})
        // console.log({innerHeight: e.view.innerHeight})
        e.currentTarget.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 1000);

    }
    render() {
        return (
            <div className="button3-wrapper" onClick={(e) => this.onClickHandle(e)}>
                <div className="fake-background"></div>
                <div className="text-holder">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default ButtonComponent1