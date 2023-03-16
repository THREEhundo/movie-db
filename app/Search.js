'use client'

import { useContext } from 'react'
import { SearchContext } from './search-provider'
import Movie from './Movie'
import Link from 'next/link'

const Search = () => {
	const { query, results, handleSubmit, handleChange, loading } =
		useContext(SearchContext)

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input type='text' value={query} onChange={handleChange} />
				<Link href={`/search/${query}`}>
					<button>Search</button>
				</Link>
			</form>

			{loading && <p>Loading...</p>}

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
			)}
		</section>
	)
}

export default Search
