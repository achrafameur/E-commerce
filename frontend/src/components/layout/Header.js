import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import '../../App.css'

const Header = () => {
	const alert = useAlert()
	const dispatch = useDispatch()

	const { user, loading } = useSelector((state) => state.auth)

	const logoutHandler = () => {
		dispatch(logout())
		alert.success('Logged out successfully.')
	}

	return (
		<Fragment>
			<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div class='container'>
					<Link to='/' class='navbar-brand'>
						BSS Networks
					</Link>

					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>

					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav mr-auto'>
							<li class='nav-item active'>
								<Link to='/' class='nav-link'>
									Home <span class='sr-only'>(current)</span>
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/about' class='nav-link'>
									About
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/contact' class='nav-link'>
									Contact
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/addproduct' class='nav-link'>
									Add Product
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/senddevis' class='nav-link'>
									Send Devis
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/productslist' class='nav-link'>
									Products List 
								</Link>
							</li>
						</ul>
						<div class='form-inline my-2 my-lg-0'>
							<button class='btn btn-white'>
								{user ? (
									<div className='ml-4 dropdown d-inline'>
										<Link
											to='#!'
											className='btn dropdown-toggle text-white mr-4'
											type='button'
											id='dropDownMenuButton'
											data-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'
										>
											<figure className='avatar avatar-nav'>
												<img
													src={user.avatar && user.avatar.url}
													alt={user && user.name}
													className='rounded-circle'
												/>
											</figure>
											<span>{user && user.name}</span>
										</Link>

										<div className='dropdown-menu' aria-labelledby='dropDownMenuButton'>
											{user && user.role === 'admin' && (
												<Link className='dropdown-item' to='/dashboard'>
													Dashboard
												</Link>
											)}
											<Link className='dropdown-item' to='/me'>
												Profile
											</Link>
											<Link className='dropdown-item text-danger' to='/' onClick={logoutHandler}>
												Logout
											</Link>
										</div>
									</div>
								) : (
									!loading && (
										<Link to='/login' className='btn ml-4' id='login_btn'>
											Login
										</Link>
									)
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	)
}

export default Header
