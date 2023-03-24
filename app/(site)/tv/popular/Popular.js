import Searchbar from '../../components/form/searchbar'
import TvCard from '../../components/media/tvCard'

const Popular = async () => {
	const data = await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&page=1`
	)
	const res = await data.json()

	const filteredResults = res.results.filter(
		movie =>
			movie.original_language !== 'hi' && movie.original_language !== 'hu'
	)

	return (
		<>
			<Searchbar />
			<h1 className='text-4xl text-center my-10'>Popular Shows 📺</h1>
			<div className='mx-12 md:mx-32 mb-12 grid gap-14 grid-cols-fluid justify-center'>
				{filteredResults.map((show, i) => (
					<TvCard
						key={show.id}
						id={show.id}
						title={show.name}
						poster_path={show.poster_path}
						release_date={show.first_air_date}
						priority
						i={i}
					/>
				))}
			</div>
		</>
	)
}

export default Popular
