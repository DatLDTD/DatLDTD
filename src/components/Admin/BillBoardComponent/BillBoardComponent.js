import React from 'react'

import './StyleBillBoard.scss'

class BillBoardComponent extends React.Component {
    render() {
        return (
            <div className="bill-board-container">
                <div className="total-bill"></div>
                <div className="title-container">
                    <div className="id-tite center">ID</div>
                    <div className="name-title left">Customer Name</div>
                    <div className="phone-title left">Phone</div>
                    <div className="address-title left">Address</div>
                    <div className="total-titl center">Total</div>
                    <div className="list-title center">List Item</div>
                    <div className="status-title center">Status</div>
                    <div className="action-title right">Actions</div>
                </div>
            </div>
        )
    }
}

export default BillBoardComponent