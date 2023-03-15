'use client'

import { useContext } from 'react'
import { SearchContext } from './search-provider'

const Search = () => {
	const { query, results, handleSubmit, handleChange, loading } =
		useContext(SearchContext)

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input type='text' value={query} onChange={handleChange} />
				<button>Search</button>
			</form>

			{loading && <p>Loading...</p>}

			{!loading && results.length === 0 && !results && (
				<p>No results found.</p>
			)}

			{!loading && results.length > 0 && (
				<ul>
					{results.map(result => (
						<li key={result.id}>{result.title}</li>
					))}
				</ul>
			)}
		</section>
	)
}

export default Search
