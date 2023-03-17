import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/commande/:id' element={<OrderScreen />} />
            <Route path='/paiement' element={<PaymentScreen />} />
            <Route path='/commande' element={<PlaceOrderScreen />} />
            <Route path='/expedition' element={<ShippingScreen />} />
            <Route path='/connexion' element={<LoginScreen />} />
            <Route path='/inscrire' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/produit/:id' element={<ProductScreen />} />
            <Route path='/panier/:id' element={<CartScreen />} />
            <Route path='/panier' element={<CartScreen />} />
            <Route
              path='/admin/listeutilisateurs'
              element={<UserListScreen />}
            />
            <Route
              path='/admin/utilisateur/:id/edit'
              element={<UserEditScreen />}
            />
            <Route
              path='/admin/listeproduits'
              element={<ProductListScreen />}
              exact
            />
            <Route
              path='/admin/listeproduits/:pageNumber'
              element={<ProductListScreen />}
              exact
            />
            <Route
              path='/admin/produit/:id/edit'
              element={<ProductEditScreen />}
            />

            <Route path='/admin/listeCommandes' element={<OrderListScreen />} />
            <Route path='/search/:keyword' element={<HomeScreen />} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
              exact
            />
            <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
            <Route path='/' element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
