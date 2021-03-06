import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import AddProduct from './components/AddProduct'
import SendDevis from './components/SendDevis'
import AdminHome from './components/adminHome'

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	const { user, isAuthenticated, loading } = useSelector((state) => state.auth)

	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container container-fluid'>
					<Route path='/' component={Home} exact />
					<Route path='/about' component={About} exact />
					<Route path='/contact' component={Contact} exact />
					<Route path='/addproduct' component={AddProduct} exact />
					<Route path='/senddevis' component={SendDevis} exact />
					<Route path='/productslist' component={AdminHome} exact />

					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/password/forgot' component={ForgotPassword} exact />
					<Route path='/password/reset/:token' component={NewPassword} exact />
					<ProtectedRoute path='/me' component={Profile} exact />
					<ProtectedRoute path='/me/update' component={UpdateProfile} exact />
					<ProtectedRoute path='/password/update' component={UpdatePassword} exact />
				</div>

				{!loading && (!isAuthenticated || user.role !== 'admin') && <Footer />}
			</div>
		</Router>
	)
}

export default App
