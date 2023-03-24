import Image from 'next/image'
import Searchbar from '../../components/form/searchbar'
import Cast from '../../components/media/cast'
import Trailer from '../../components/media/trailer'
import TvShowDetails from '../../components/media/tvShowDetails'

const TvShow = async ({ params }) => {
	const { id } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'
	const data = await fetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()
	const youtubeData = await fetch(
		`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US`
	)
	const youtubeRes = await youtubeData.json()
	let youtubeKey = youtubeRes?.results?.find(
		x => x.type.includes('Opening Credits') || x.type.includes('Trailer')
	)?.key
	const youtubeUrl = 'https://youtube.com/embed/'

	return (
		<div className='mx-32 mb-12'>
			<Searchbar />
			<TvShowDetails
				originalName={res.original_name}
				releaseDate={res.release_date}
				runtime={res.runtime}
				status={res.status}
				backdropPath={getImageUrl(imagePath, res)}
				overview={res.overview}
				episodes={res.number_of_episodes}
				seasons={res.number_of_seasons}
			/>
			{youtubeKey && (
				<Trailer youtubeUrl={youtubeUrl} youtubeKey={youtubeKey} />
			)}
			<Cast imagePath={imagePath} id={id} mediaType='tv' />
		</div>
	)
}

function getImageUrl(imagePath, res) {
	const path = res.backdrop_path || res.poster_path
	return `${imagePath}${path}`
}
export default TvShow
