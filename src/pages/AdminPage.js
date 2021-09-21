import React from 'react'

import NavbarAdminComponent from '../components/Admin/NavbarAdminComponent/NavbarAdminComponent'
import HeaderAdminContainer from '../containers/AdminContainer/HeaderAdminContainer'
import ProductBoardContainer from '../containers/AdminContainer/ProductBoardContainer'
import BillBoardContainer from '../containers/AdminContainer/BillBoardContainer'
class AdminPage extends React.Component {
    state = {
        boardName: ""
    }
    navigateBoard(text) {
        this.setState({ boardName: text })
    }
    render() {
        return (
            <div className="admin-page">
                <NavbarAdminComponent navigateBoard={(text) => this.navigateBoard(text)} />
                <div className="admin-page-body">
                    <HeaderAdminContainer boardName={this.state.boardName} />
                    <div className="board-container">
                        {
                            this.state.boardName === "Products"
                                ?
                                <>
                                    <div className="board-tag">PD</div>
                                    <ProductBoardContainer />
                                </>
                                :
                                null
                        }
                        {
                            this.state.boardName === "Collections"
                                ?
                                <>
                                    <div className="board-tag">CL</div>
                                </>
                                :
                                null
                        }
                        {
                            this.state.boardName === "Features"
                                ?
                                <>
                                    <div className="board-tag">FT</div>
                                </>
                                :
                                null
                        }
                        {
                            this.state.boardName === "Materials"
                                ?
                                <>
                                    <div className="board-tag">MT</div>
                                </>
                                :
                                null
                        }
                        {
                            this.state.boardName === "Bills"
                                ?
                                <>
                                    <div className="board-tag">BL</div>
                                    <BillBoardContainer />
                                </>
                                :
                                null
                        }
                    </div>
                </div>
                <div className="filter-div"></div>
            </div>
        )
    }
}

export default AdminPage