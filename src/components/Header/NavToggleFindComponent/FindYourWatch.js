import React from 'react'
import ButtonComponent2 from '../../ButtonComponent/Button2/ButtonComponent2'
import './StyleFindYourWatch.scss'
import img2 from '../../../img/menu-manager/FeaturedCollection-NewMoonwatchPro.jpg'
import img1 from '../../../img/menu-manager/suggestions-james-bond-007-new-watches.jpg'
class FindYourWatch extends React.Component {
    render() {
        return (
            <div className="find-toggle-container">
                <div className="wrapper">
                    <div className="child">
                        <span className="title">featured collection</span>
                        <div className="img-container">
                            <a href="#">
                                <div className="img-wrapper">
                                    <img className="dmm" alt="err" src={img1} />
                                    <span>007 edition</span>
                                </div>
                            </a>
                            <a href="#">
                                <div className="img-wrapper">
                                    <img alt="err" src={img2} />
                                    <span>moonwatch professional</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="child">
                        <div className="litle-child">
                            <span className="title">by size</span>
                            <a href="#">
                                <span>women's selection</span>
                            </a>
                            <a href="#">
                                <span>men's selection</span>
                            </a>
                        </div>
                        <div className="litle-child">
                            <span className="title">by style</span>
                            <a href="#">
                                <span>dress watches</span>
                            </a>
                            <a href="#">
                                <span>sport watches</span>
                            </a>
                            <a href="#">
                                <span>dive watches</span>
                            </a>
                        </div>
                    </div>
                    <div className="child">
                        <span className="title">by material</span>
                        <a href="#">
                            <span>gold watches</span>
                        </a>
                        <a href="#">
                            <span>titanium watches</span>
                        </a>
                        <a href="#">
                            <span>ceramic watches</span>
                        </a>
                        <a href="#">
                            <span>steel watches</span>
                        </a>
                    </div>
                    <div className="child last-child">
                        <span className="title">by feature</span>
                        <a href="#">
                            <span>master chronometer watches</span>
                        </a>
                        <a href="#">
                            <span>chronograph watches</span>
                        </a>
                        <a href="#">
                            <span>automatic watches</span>
                        </a>
                        <a href="#">
                            <span>manual winding watches</span>
                        </a>
                        <a href="#">
                            <span>quartz watches</span>
                        </a>
                    </div>
                </div>
                <div className="button-container">
                    <a href="#">
                        <ButtonComponent2 text="all suggestion" />
                    </a>
                    <a href="#">
                        <ButtonComponent2 text="watch finder" />
                    </a>
                </div>
            </div>
        )
    }
}

export default FindYourWatch