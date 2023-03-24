import MovieCard from './components/media/movieCard'

const TrendingMovies = async () => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()
	const movieIds = res.results.map(movie => movie.id)

	return (
		<>
			<h1 className='text-4xl text-center my-10'>
				Popular Movies Wikipedia 🎥
			</h1>
			<h2 className='text-2xl text-center my-3'>Trending 📈</h2>
			<div className='grid gap-14 grid-cols-fluid justify-center'>
				{res.results.map((movie, i) => (
					<MovieCard
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
		</>
	)
}

export default TrendingMovies
