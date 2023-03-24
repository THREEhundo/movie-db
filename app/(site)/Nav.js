'use client'
import React from 'react'
import Link from 'next/link'
import SignInButton from './components/auth/signInButton'
import Image from 'next/image'
import Searchbar from './components/form/searchbar'

const Nav = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<Link className='btn btn-ghost normal-case text-xl' href='/'>
					Silver Screen 🎥
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li tabIndex={0}>
						<a>
							Movies
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</a>
						<ul className='p-2 bg-base-100'>
							<li>
								<Link href='/movie/popular'>Popular</Link>
							</li>
							<li>
								<Link href='/movie/nowPlaying'>
									Now Playing
								</Link>
							</li>
							<li>
								<Link href='/movie/upcoming'>Upcoming</Link>
							</li>
							<li>
								<Link href='/movie/topRated'>Top Rated</Link>
							</li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a>
							TV
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</a>
						<ul className='p-2 bg-base-100'>
							<li>
								<Link href='/tv/popular'>Popular</Link>
							</li>
							<li>
								<Link href='/tv/onAir'>On Air </Link>
							</li>
							<li>
								<Link href='/tv/topRated'>Top Rated</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className='flex-none gap-2'>
				<Searchbar />
				<div className='dropdown dropdown-end'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<Image
								alt='pic'
								src='/images/stock/photo-1534528741775-53994a69daeb.jpg'
								width={25}
								height={25}
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		//<Navbar fluid={true} rounded={true} className='bg-slate-700'>
		//	<Link href='/' className='bg-inherit'>
		//		<span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
		//			Silver Screen 🎥
		//		</span>
		//	</Link>
		//	<div className='flex md:order-2'>
		//		{/*<Dropdown
		//			arrowIcon={false}
		//			inline={true}
		//			label={
		//				<Avatar
		//					alt='User settings'
		//					img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
		//					rounded={true}
		//				/>
		//			}>
		//			<DropdownHeader>
		//				<span className='block text-sm'>Bonnie Green</span>
		//				<span className='block truncate text-sm font-medium'>
		//					name@flowbite.com
		//				</span>
		//			</DropdownHeader>
		//			<DropdownItem>Dashboard</DropdownItem>
		//			<DropdownItem>Settings</DropdownItem>
		//			<DropdownItem>Earnings</DropdownItem>
		//			<DropdownDivider />
		//			<DropdownItem>Sign out</DropdownItem>
		//		</Dropdown>*/}
		//		<SignInButton />
		//		{/*<NavbarToggle />*/}
		//	</div>
		//	<NavbarCollapse>
		//		<Dropdown
		//			label='Movies'
		//			inline={true}
		//			placement='bottom'
		//			className='bg-slate-700'>
		//			<Link href='/movie/popular'>
		//				<DropdownItem>Popular</DropdownItem>
		//			</Link>
		//			<Link href='/movie/nowPlaying'>
		//				<DropdownItem>Now Playing</DropdownItem>
		//			</Link>
		//			<Link href='/movie/upcoming'>
		//				<DropdownItem>Upcoming</DropdownItem>
		//			</Link>
		//			<Link href='/movie/topRated'>
		//				<DropdownItem>Top Rated</DropdownItem>
		//			</Link>
		//		</Dropdown>
		//		<Dropdown label='TV' inline={true} placement='bottom'>
		//			<Link href='/tv/popular'>
		//				<DropdownItem>Popular</DropdownItem>
		//			</Link>
		//			<Link href='/tv/onAir'>
		//				<DropdownItem>On Air</DropdownItem>
		//			</Link>
		//			<Link href='/tv/topRated'>
		//				<DropdownItem>Top Rated</DropdownItem>
		//			</Link>
		//		</Dropdown>
		//	</NavbarCollapse>
		//</Navbar>
	)
}
const Naaa = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>
					Silver Screen 🎥
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li tabIndex={0}>
						<a>
							Movies
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</a>
						<ul className='p-2 bg-base-100'>
							<li>
								<Link href='/movie/popular'>Popular</Link>
							</li>
							<li>
								<Link href='/movie/nowPlaying'>
									Now Playing
								</Link>
							</li>
							<li>
								<Link href='/movie/upcoming'>Upcoming</Link>
							</li>
							<li>
								<Link href='/movie/topRated'>Top Rated</Link>
							</li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a>
							TV
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</a>
						<ul className='p-2 bg-base-100'>
							<li>
								<Link href='/tv/popular'>Popular</Link>
							</li>
							<li>
								<Link href='/tv/nowPlaying'>On Air </Link>
							</li>
							<li>
								<Link href='/tv/topRated'>Top Rated</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className='flex-none gap-2'>
				<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered'
					/>
				</div>
				<div className='dropdown dropdown-end'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<Image
								alt='pic'
								src='/images/stock/photo-1534528741775-53994a69daeb.jpg'
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Nav
