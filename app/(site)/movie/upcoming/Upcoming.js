import MovieCard from '../../components/media/movieCard'

const Upcoming = async () => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&page=1`
	)
	const res = await data.json()

	const filteredResults = res.results.filter(result => {
		const releaseDate = new Date(result.release_date)
		const minDate = new Date(res.dates.minimum)
		const maxDate = new Date(res.dates.maximum)
		return releaseDate >= minDate && releaseDate <= maxDate
	})

	return (
		<>
			<h1 className='text-4xl text-center my-10'>Upcoming Movies 🎥</h1>
			<div className='mx-12 md:mx-32 mb-12 grid gap-14 grid-cols-fluid justify-center'>
				{filteredResults.map((movie, i) => (
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
	return <div>Upcoming</div>
}

export default Upcoming
