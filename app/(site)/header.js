'use client'
import React, { Suspense } from 'react'
import Link from 'next/link'
import SignInButton from './components/auth/signInButton'
import Image from 'next/image'
import Searchbar from './components/form/searchbar'
import Loading from './components/ui/loading'
import ErrorBoundary from './components/errorBoundary'

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
				{/*<ErrorBoundary>*/}
				{/*</ErrorBoundary>*/}
				<SignInButton />
			</div>
		</div>
	)
}
export default Nav
