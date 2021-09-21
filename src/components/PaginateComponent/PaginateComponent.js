import React from 'react'

import { ChevronDoubleLeft, ChevronDoubleRight } from 'react-bootstrap-icons';

import './StylePaginate.scss'
class PaginateComponent extends React.Component {
    chevHandle(i) {
        this.props.changePage(parseInt(this.props.currentPage + i))
    }
    render() {
        let currentPage = parseInt(this.props.currentPage)
        let totalPage = parseInt(this.props.totalPage)
        if(currentPage > totalPage) currentPage = totalPage
        return (
            <div className="paginate-wrapper">
                {
                    this.props.currentPage == 1
                        ?
                        <div className="btn-paginate disable btn-before" onClick={() => this.chevHandle(-1)}><ChevronDoubleLeft /></div>
                        :
                        <div className="btn-paginate btn-before" onClick={() => this.chevHandle(-1)}><ChevronDoubleLeft /></div>
                }
                {
                    currentPage != 1
                        ?
                        <div className="btn-paginate btn-num " onClick={() => this.props.changePage(1)}>1</div>
                        :
                        <>
                            {
                                totalPage > 3
                                    ?
                                    <>
                                        <div className="btn-paginate btn-num active " >1</div>
                                        <div className="btn-paginate btn-num" onClick={() => this.props.changePage(2)}>2</div>
                                        <div className="btn-paginate btn-num" onClick={() => this.props.changePage(3)}>3</div>
                                    </>
                                    :
                                    <>
                                        {
                                            totalPage == 3
                                                ?
                                                <>
                                                    <div className="btn-paginate btn-num active " >1</div>
                                                    <div className="btn-paginate btn-num" onClick={() => this.props.changePage(2)}>2</div>
                                                </>
                                                :
                                                <div className="btn-paginate btn-num active " >1</div>
                                        }

                                    </>
                            }
                        </>
                }
                {
                    currentPage > 3 && totalPage > 4
                        ?
                        <div className="dotdotdot-paginate">...</div>
                        : null
                }
                {
                    currentPage != 1 && currentPage != totalPage
                        ?
                        <>

                            {
                                currentPage > 2
                                    ?
                                    <div className="btn-paginate btn-num " onClick={() => this.props.changePage(currentPage - 1)}>{currentPage - 1}</div>
                                    : null
                            }
                            <div className="btn-paginate btn-num active">{currentPage}</div>
                            {
                                currentPage < totalPage - 1
                                    ?
                                    <div className="btn-paginate btn-num " onClick={() => this.props.changePage(currentPage + 1)}>{currentPage + 1}</div>
                                    : null
                            }


                        </>
                        : null
                }
                {
                    currentPage < totalPage - 2 && totalPage > 4
                        ?
                        <div className="dotdotdot-paginate">...</div>
                        : null
                }
                {
                    currentPage != totalPage
                        ?
                        <div className="btn-paginate btn-num" onClick={() => this.props.changePage(totalPage)}>{totalPage.toString()}</div>
                        :
                        <>
                            {
                                totalPage > 3
                                    ?
                                    <>

                                        <div className="btn-paginate btn-num" onClick={() => this.props.changePage(totalPage - 2)}>{totalPage - 2}</div>
                                        <div className="btn-paginate btn-num" onClick={() => this.props.changePage(totalPage - 1)}>{totalPage - 1}</div>
                                        <div className="btn-paginate btn-num active " >{totalPage}</div>
                                    </>
                                    :
                                    <>
                                        {
                                            totalPage == 3
                                                ?
                                                <>
                                                    <div className="btn-paginate btn-num" onClick={() => this.props.changePage(totalPage - 1)}>{totalPage - 1}</div>
                                                    <div className="btn-paginate btn-num active " >{totalPage}</div>
                                                </>
                                                :
                                                <>
                                                    {
                                                        totalPage > 1
                                                            ?
                                                            <div className="btn-paginate btn-num active " >{totalPage}</div>
                                                            :
                                                            null
                                                    }
                                                </>
                                        }
                                    </>
                            }
                        </>
                }

                {
                    this.props.currentPage == this.props.totalPage
                        ?
                        <div className="btn-paginate disable btn-after" onClick={() => this.chevHandle(+1)}><ChevronDoubleRight /></div>
                        :
                        <div className="btn-paginate btn-after" onClick={() => this.chevHandle(+1)}><ChevronDoubleRight /></div>
                }

            </div>
        )
    }
}

export default PaginateComponent