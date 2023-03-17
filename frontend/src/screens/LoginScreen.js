import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const { search } = useLocation()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin
  const redirect = search ? search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Se Connecter</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='Entrez votre e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Entrer votre mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Se Connecter
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Nouveau client?{' '}
          <Link to={redirect ? `/inscrire?redirect=${redirect}` : '/inscrire'}>
            S'inscrire
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
