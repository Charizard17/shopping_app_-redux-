import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'
import "../../App.css"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="categoryList" xs="3">
                        <CategoryList />
                    </Col>
                    <Col className="productList" xs="9">
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
