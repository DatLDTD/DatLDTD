import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import './StyleSearch.scss'

class SearchComponent extends React.Component {
    render() {
        return (
            <div className="search-container">
                <div className="search-wrapper">
                    <input type="text" className="search-input" required></input>
                    <div className="hello-mother-fucker">
                        <span className="search-fake-boder-bottom"></span>
                        <span className="holder-text">Search...</span>
                    </div>
                    <div className="search-icon"><FontAwesomeIcon icon={faSearch} className="icon-search" /></div>
                </div>
            </div>
        )
    }
}

export default SearchComponent