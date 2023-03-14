'use client'

const Search = () => {
	const handleSubmit = async e => {
		e.preventDefault()

		const form = e.target
		const formData = new FormData(form)

		const formJson = Object.fromEntries(formData.entries())
		const searchParam = formJson.search.split(' ').join('%20')

		console.log(
			`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${searchParam}&page=1&include_adult=false`
		)
		//https://api.themoviedb.org/3/search/multi?api_key=edb4c2a01dfa881686dceba514b445db&language=en-US&query=die%20hart&page=1&include_adult=false
		//
		//https://api.themoviedb.org/3/search/multi?api_key=edb4c2a01dfa881686dceba514b445db&language=en-US&query=die%20hart=1&include_adult=false

		const data = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${searchParam}&page=1&include_adult=false`
		)

		const res = await data.json()
	}

	return (
		<form action='/search' method='GET' onSubmit={handleSubmit}>
			<input type='text' name='search' id='search' />
			<button>Search</button>
		</form>
	)
}

export default Search
