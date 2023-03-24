import Searchbar from '../../components/form/Searchbar'
import Cast from '../../components/media/Cast'
import MovieDetails from '../../components/media/MovieDetails'
import Trailer from '../../components/media/Trailer'

const Movie = async ({ params }) => {
	const { id } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'

	// Fetch Movie Details
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()
	const posterUrls = () =>
		res.backdrop_path === null ? res.poster_path : res.backdrop_path

	// Fetch Youtube Link
	const youtubeData = await fetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const youtubeRes = await youtubeData.json()
	const youtubeUrl = 'https://youtube.com/embed/'
	const youtubeKey = youtubeRes.results.find(
		x => x.type.includes('Trailer') || x.type.includes('Teaser')
	)?.key

	return (
		<div className='mx-32 mb-12'>
			<Searchbar />
			<MovieDetails
				title={res.title}
				releaseDate={res.release_date}
				runtime={res.runtime}
				status={res.status}
				posterUrl={imagePath + posterUrls()}
				overview={res.overview}
			/>
			{youtubeKey && (
				<Trailer youtubeUrl={youtubeUrl} youtubeKey={youtubeKey} />
			)}
			<Cast imagePath={imagePath} id={id} mediaType='movie' />
		</div>
	)
}

export default Movie
