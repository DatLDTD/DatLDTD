import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StyleAddProduct.scss'
class AddProductComponent extends React.Component {
    state = {
        name: "",
        collectionSelected: "",
        subCollectionSelected: "",
        featureSelected: "",
        listFeature: [],
        materialSelected: "",
        listMaterial: [],
        categorySelected: "",
        listCategory: [],
        avatarImage: "",
        numberDetailImage: 1,
        listDetailImage: [],
        describle: "",
        quantity: "",
        price: "",
        sale: "",
        technical: {
            CaseDiameter: "",
            DialColour: "",
            WaterResistance: "",
            Case: "",
            Bracelet: "",
        },
    }
    async addProductOnclick() {
        let product = await {
            productName: this.state.name,
            productImage: {
                avatarImage: this.state.avatarImage,
                detailImage: this.state.listDetailImage
            },
            productQuantity: this.state.quantity,
            productPrice: this.state.price,
            productSale: this.state.sale,
            productDescrible: this.state.describle,
            productCollection: this.state.collectionSelected,
            productSubCollection: this.state.subCollectionSelected,
            productTechnicalData: {
                CaseDiameter: this.state.technical.CaseDiameter + " mm",
                DialColour: this.state.technical.DialColour,
                WaterResistance: this.state.technical.WaterResistance + " bar",
                Case: this.state.technical.Case,
                Bracelet: this.state.technical.Bracelet
            },
            productFeatures: this.state.listFeature,
            productMaterial: this.state.listMaterial,
            productCategories: this.state.listCategory
        }
        this.props.addProduct(product)
        window.location.reload()
    }
    async collecttionSelectHandle(e) {
        await this.setState({ collectionSelected: e.target.value })
        await this.setState({ subCollectionSelected: "" })
        let subCollection = document.querySelector('.subcollection-select')
        subCollection.value = ""
    }
    async subCollecttionSelectHandle(e) {
        await this.setState({ subCollectionSelected: e.target.value })
    }
    async featureOnchangeHandle(e) {
        await this.setState({ featureSelected: e.target.value })
    }
    async materialOnchangeHandle(e) {
        await this.setState({ materialSelected: e.target.value })
    }
    async categoryOnchangeHandle(e) {
        await this.setState({ categorySelected: e.target.value })
    }
    async addFeatureHandle() {
        let check = true
        this.state.listFeature.forEach(item => {
            if (item === this.state.featureSelected) check = false
        })
        if (check === true) {
            let arr = await this.state.listFeature.concat(this.state.featureSelected)
            this.setState({ listFeature: arr })
        }
    }
    async addMaterialHandle() {
        let check = true
        this.state.listMaterial.forEach(item => {
            if (item === this.state.materialSelected) check = false
        })
        if (check === true) {
            let arr = await this.state.listMaterial.concat(this.state.materialSelected)
            this.setState({ listMaterial: arr })
        }
    }
    async addCategoryHandle() {
        let check = true
        this.state.listCategory.forEach(item => {
            if (item === this.state.categorySelected) check = false
        })
        if (check === true) {
            let arr = await this.state.listCategory.concat(this.state.categorySelected)
            this.setState({ listCategory: arr })
        }
    }
    async deleteFeture(key) {
        let arr = await this.state.listFeature
        await arr.splice(key, 1)
        this.setState({ listFeature: arr })
    }

    async deleteMaterial(key) {
        let arr = await this.state.listMaterial
        await arr.splice(key, 1)
        this.setState({ listMaterial: arr })
    }
    async deleteCategory(key) {
        let arr = await this.state.listCategory
        await arr.splice(key, 1)
        this.setState({ listCategory: arr })
    }
    async avatarImgHandle(e) {
        await this.setState({ avatarImage: e.target.files[0].name })
    }
    async numberDetailImgHandle(e) {
        await this.setState({ numberDetailImage: e.target.value })
        let list = []
        for (let i = 0; i < this.state.numberDetailImage; i++) {
            list.push("")
        }
        this.setState({ listDetailImage: list })
    }
    async detailImageHandle(e, key) {
        let list = this.state.listDetailImage
        list[key] = e.target.files[0].name
        await this.setState({
            listDetailImage: list
        })
    }
    render() {
        let listCollection = []
        let listSubCollection = []
        let listFeature = []
        let listMaterial = []
        let listCategory = []
        if (this.props.listCollection) {
            listCollection = this.props.listCollection.map((item, key) => {
                return (
                    <option key={key}>
                        {item.collectionName}
                    </option>
                )
            })
            this.props.listCollection.forEach(item => {
                if (item.collectionName === this.state.collectionSelected) {
                    listSubCollection = item.subCollection.map((item, key) => {
                        return (
                            <option key={key}>
                                {item}
                            </option>
                        )
                    })
                }
            });
        }
        if (this.props.listFeature) {
            listFeature = this.props.listFeature.map((item, key) => {
                return (
                    <option key={key}>
                        {item.featureName}
                    </option>
                )
            })
        }
        if (this.props.listMaterial) {
            listMaterial = this.props.listMaterial.map((item, key) => {
                return (
                    <option key={key}>
                        {item.materialName}
                    </option>
                )
            })
        }
        if (this.props.listCategory) {
            listCategory = this.props.listCategory.map((item, key) => {
                return (
                    <option key={key}>
                        {item.categoryName}
                    </option>
                )
            })
        }
        let listFeatureData = []
        listFeatureData = this.state.listFeature.map((item, key) => {
            return (
                <div key={key} className="content-wrapper">
                    <span>{item}</span>
                    <span onClick={() => this.deleteFeture(key)}>x</span>
                </div>
            )
        })
        let listMaterialData = []
        listMaterialData = this.state.listMaterial.map((item, key) => {
            return (
                <div key={key} className="content-wrapper">
                    <span>{item}</span>
                    <span onClick={() => this.deleteMaterial(key)}>x</span>
                </div>
            )
        })
        let listCategoryData = []
        listCategoryData = this.state.listCategory.map((item, key) => {
            return (
                <div key={key} className="content-wrapper">
                    <span>{item}</span>
                    <span onClick={() => this.deleteCategory(key)}>x</span>
                </div>
            )
        })
        let listDetailImage = []
        let list = []
        for (let i = 0; i < this.state.numberDetailImage; i++) {
            list.push(i)
        }
        listDetailImage = list.map((item, key) => {
            return (
                <div key={key}>
                    <span>{item + 1}:</span>
                    <input disabled type="file" className="input-file" onChange={(e) => this.detailImageHandle(e, key)} />
                </div>
            )
        })
        return (
            <div className="add-product-wrapper">
                <div className="btn-close" onClick={() => this.props.closeAddProduct()}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="data-field-container">
                    <div className="part-field">
                        <div className="name">
                            <span>Name:</span>
                            <input type="text" onChange={async (e) => {
                                await this.setState({ name: e.target.value })
                            }} />
                        </div>
                        <div className="image">
                            <div className="image-data">
                                <div className="avatarimage">
                                    <span>Avatar Image:</span>
                                    <input type="file" onChange={(e) => this.avatarImgHandle(e)} />
                                </div>
                                <div className="detailimage">
                                    <span>Detail Images Amount:</span>
                                    <input className="input-number-detail" defaultValue='1' type="number" min="1" max="5" onChange={(e) => this.numberDetailImgHandle(e)} />
                                    <button onClick={(e) => {
                                        let input = document.querySelector('.input-number-detail')
                                        input.style.display = 'none';
                                        e.currentTarget.style.display = 'none'
                                        let inputFile = document.querySelectorAll('.input-file')
                                        console.log(inputFile)
                                        inputFile.forEach((input) => {
                                            input.removeAttribute("disabled")
                                        })
                                    }}>confirm</button>
                                    <div className="list-detail-image">
                                        {listDetailImage}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quantity-price-sale">
                            <div>
                                <span>Quantity:</span>
                                <input type="number" min="1" onChange={(e) => this.setState({ quantity: e.target.value })} />
                            </div>
                            <div>
                                <span>Price:</span>
                                <input type="text" onChange={(e) => this.setState({ price: e.target.value })} />
                            </div>
                            <div>
                                <span>Sale:</span>
                                <input type="number" min="0" onChange={(e) => this.setState({ sale: e.target.value })} />
                            </div>
                        </div>
                        <div className="describle">
                            <span>Describle:</span>
                            <textarea onChange={(e) => { this.setState({ describle: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="part-field-fake"></div>
                    <div className="part-field">
                        <div className="collection">
                            <div>
                                <span>Collection:</span>
                                <select className="collection-select" onChange={(e) => this.collecttionSelectHandle(e)}>
                                    <option></option>
                                    {listCollection}
                                </select>
                            </div>
                            <div>
                                <span>Sub-Collection:</span>
                                <select className="subcollection-select" onChange={(e) => this.subCollecttionSelectHandle(e)} >
                                    {listSubCollection}
                                </select>
                            </div>
                        </div>
                        <div className="technical-data">
                            <span>Technical</span>
                            <div className="data-wrapper">
                                <div>
                                    <span>Case Diameter (mm) :</span>
                                    <input type="number" min="24" onChange={async (e) => {
                                        await this.setState({
                                            technical: {
                                                ...this.state.technical,
                                                CaseDiameter: e.target.value
                                            }
                                        })
                                    }} />
                                </div>
                                <div>
                                    <span>Dial Colour:</span>
                                    <input type="text" onChange={async (e) => {
                                        await this.setState({
                                            technical: {
                                                ...this.state.technical,
                                                DialColour: e.target.value
                                            }
                                        })
                                    }} />
                                </div>
                                <div>
                                    <span>Water Registance (bar):</span>
                                    <input type="number" min="0"
                                        onChange={async (e) => {
                                            await this.setState({
                                                technical: {
                                                    ...this.state.technical,
                                                    WaterResistance: e.target.value
                                                }
                                            })
                                        }} />
                                </div>
                                <div>
                                    <span>Case:</span>
                                    <input type="text" onChange={async (e) => {
                                        await this.setState({
                                            technical: {
                                                ...this.state.technical,
                                                Case: e.target.value
                                            }
                                        })
                                    }} />
                                </div>
                                <div>
                                    <span>Bracelet:</span>
                                    <input type="text" onChange={async (e) => {
                                        await this.setState({
                                            technical: {
                                                ...this.state.technical,
                                                Bracelet: e.target.value
                                            }
                                        })
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="feature">
                            <span>Features:</span>
                            <select onChange={(e) => this.featureOnchangeHandle(e)}>
                                <option></option>
                                {listFeature}
                            </select>
                            <div className="btn-add-more" onClick={() => this.addFeatureHandle()}>add</div>
                            <div className="list-data-container">
                                {listFeatureData}
                            </div>
                        </div>
                        <div className="material">
                            <span>Material:</span>
                            <select onChange={(e) => this.materialOnchangeHandle(e)}>
                                <option></option>
                                {listMaterial}
                            </select>
                            <div className="btn-add-more" onClick={() => this.addMaterialHandle()}>add</div>
                            <div className="list-data-container">
                                {listMaterialData}
                            </div>
                        </div>
                        <div className="category">
                            <span>Categories:</span>
                            <select onChange={(e) => this.categoryOnchangeHandle(e)}>
                                <option></option>
                                {listCategory}
                            </select>
                            <div className="btn-add-more" onClick={() => this.addCategoryHandle()}>add</div>
                            <div className="list-data-container">
                                {listCategoryData}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-add-product" onClick={() => this.addProductOnclick()}>
                    ADD PRODUCT
                </div>
            </div>
        )
    }
}

export default AddProductComponent