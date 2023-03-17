import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const { search } = useLocation()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)

  const { loading, error, userInfo } = userRegister
  const redirect = search ? search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>S'inscrire</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='nom'>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez votre Nom'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirmer votre mot de passe'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          S'inscrire
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Compte existant?{' '}
          <Link
            to={redirect ? `/connexion?redirect=${redirect}` : '/connexion'}
          >
            Se Connecter
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
