import React from 'react'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchContainer from '../../../containers/SearchContainer'

import './StyleHeaderAdmin.scss'

class HeaderAdminComponent extends React.Component {
    render() {
        return (
            <div className="header-admin-container">
                <div className="left-side">
                    <span className="board-name-wrapper">{this.props.boardName}</span>
                </div>
                <div className="right-side">
                    <div className="search-bar-wrapper">
                        <SearchContainer />
                    </div>
                    <div className="header-icon-wrapper">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="header-icon-wrapper">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderAdminComponent