'use client'

import { useState } from 'react'
import Link from 'next/link'

const Searchbar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = e => {
		e.preventDefault()
		setSearchQuery(encodeURI(searchQuery))
		setSearchQuery('')
	}
	//my-2 md:max-w-xl mx-auto
	return (
		<div className='form-control'>
			<form onSubmit={handleSearch}>
				<label
					htmlFor='default-search'
					className='mb-2 text-sm font-medium sr-only text-white'>
					Search
				</label>
				<div className='relative'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-gray-400'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</div>
					<input
						type='text'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						id='default-search'
						className='block w-full p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500'
						placeholder='Search'
						required
					/>
					<Link href={`/search?query=${searchQuery}`}>
						<button className='text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
							Search
						</button>
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Searchbar

{
	/*<div className='form-control'>
					<input
						type='text'
						placeholder='Search'
						className='input input-bordered'
					/>
				</div>*/
}
