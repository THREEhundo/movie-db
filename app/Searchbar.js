'use client'

import { useCallback, useContext, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SearchContext } from './search-provider'
import Movie from './Movie'
import Link from 'next/link'

const Searchbar = () => {
	//const { query, results, handleSubmit, handleChange, loading } =
	//	useContext(SearchContext)

	//const pathname = usePathname()
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = e => {
		e.preventDefault()
		setSearchQuery(encodeURI(searchQuery))
	}

	return (
		<section>
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

			{/*{loading && <p>Loading...</p>}

			{!loading && results.length === 0 && !results && (
				<p>No results found.</p>
			)}

			{!loading && results.length > 0 && (
				<div className='grid gap-14 grid-cols-fluid'>
					{results.map((movie, i) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							poster_path={movie.poster_path}
							release_date={movie.release_date}
							priority
							i={i}
						/>
					))}
				</div>
			)}*/}
		</section>
	)
}

export default Searchbar
