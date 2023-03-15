'use client'

import { createContext, useState } from 'react'
import axios from 'axios'

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {
	const [results, setResults] = useState([])
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)

		setQuery(query.split(' ').join('%20'))

		console.log(
			`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		)

		const res = await axios.get(
			`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		)
		setResults(res.data.results)
		setLoading(false)
	}

	const handleChange = e => setQuery(e.target.value)

	return (
		<SearchContext.Provider
			value={{ results, handleChange, handleSubmit, query, loading }}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProvider
