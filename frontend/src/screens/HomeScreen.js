import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

import { useParams } from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'

const HomeScreen = () => {
  const id = useParams()
  const pageNumber = useParams() || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products, keyword, pages, page } = productList

  useEffect(() => {
    dispatch(listProducts(id.keyword, pageNumber.pageNumber))
  }, [dispatch, id, pageNumber])

  return (
    <>
      <Meta />
      {!id.keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Retour
        </Link>
      )}
      <h2>Derniers Produits</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
