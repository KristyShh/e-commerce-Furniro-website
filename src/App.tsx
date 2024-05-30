import {
   Outlet,
} from 'react-router-dom'
import './app.scss'

import{ Product } from './components/Product/Product'
import  {Products } from './pages/Products/Products'
import { Home }  from '../src/pages/Home/Home'
import  Navbar  from '../src/components/Navbar/Navbar'
import  Footer  from '../src/components/Footer/Foter'
import {Error} from '../src/pages/Error'
import {Routes, Route} from 'react-router-dom'
import {LoginPage} from '../src/components/loginPage/loginPage'
import {BlogPage} from '../src/components/blogPage/BlogPage'
import { PrivateRoute } from './components/blogPage/PrivateRoute'
import AboutPage from './pages/About/About'
import Favorites from './pages/Favorites/Favorites'
const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
      )
}
function App() {

  return (
    <>
   
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product/>} />   
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route element={<PrivateRoute />}> 
          <Route path="/blog" element={<BlogPage />} />
        </Route>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    
    </>
  )
}

export default App
