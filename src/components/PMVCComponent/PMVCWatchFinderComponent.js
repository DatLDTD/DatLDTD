import React from 'react'

import './StylePMVC.scss'

class PMVCWatchFinderComponent extends React.Component{
    render(){
        return(
            <div className="pm-vc-container pmvc-finder">
                <div className="filter"></div>
                <div className="tittle-pmvc-wrapper"><span>watch finder</span></div>
            </div>
        )
    }
}

export default PMVCWatchFinderComponent