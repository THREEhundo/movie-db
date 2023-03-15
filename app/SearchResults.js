import React from 'react'

const SearchResults = ({ results }) => {
	console.log(results)
	return (
		<ul className='h-full'>
			{results &&
				results.map(result => {
					;<li key={result.id}>{result.title}</li>
				})}
		</ul>
	)
}

export default SearchResults
