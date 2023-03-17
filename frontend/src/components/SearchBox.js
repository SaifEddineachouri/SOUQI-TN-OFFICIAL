import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='d-inline-block'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Recherche de produits ...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 d-inline-block'
      >
        Recherche
      </Button>
    </Form>
  )
}

export default SearchBox
