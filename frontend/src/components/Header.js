import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>SOUQI</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox />
            <Nav className='ms-auto'>
              <LinkContainer to='/panier'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Panier
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Se déconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/connexion'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>Se connecter
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Administrateur' id='adminmenu'>
                  <LinkContainer to='admin/listeutilisateurs'>
                    <NavDropdown.Item>Utilisateurs</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='admin/listeproduits'>
                    <NavDropdown.Item>Produits</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='admin/listecommandes'>
                    <NavDropdown.Item>Commandes</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
