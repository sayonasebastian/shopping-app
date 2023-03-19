import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import ProductCard from '../components/ProductCard'
const HomeScreen = () => {
  return (
    <div>
        <h1>Latest products</h1>
        <Row>
            {products.map((product)=> (
                <Col sm={12} md={6} lg={4} xl ={3}>
                <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen