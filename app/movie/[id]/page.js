import Image from 'next/image'
import Cast from '../../components/media/Cast'
import Trailer from '../../components/media/Trailer'

const MovieDetail = async ({ params }) => {
	const { id } = params
	//console.log(params)
	const imagePath = 'https://image.tmdb.org/t/p/original'

	// Fetch Movie Details
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()
	const posterUrl = () =>
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
	console.log(youtubeRes)
	console.log('YOUTUBE KEY :', youtubeKey)
	return (
		<div className='mx-32 mb-12'>
			<h2 className='text-2xl'>{res.title}</h2>
			<h2 className='text-lg'>{res.release_date}</h2>
			<h2>Runtime: {res.runtime} minutes</h2>
			<h2 className='bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md'>
				{res.status}
			</h2>
			<Image
				className='my-12 w-full'
				src={imagePath + posterUrl()}
				alt={`${res.title} Poster`}
				width={1000}
				height={1000}
				priority
			/>
			<p>{res.overview}</p>
			{youtubeKey && (
				<Trailer youtubeUrl={youtubeUrl} youtubeKey={youtubeKey} />
			)}
			<Cast imagePath={imagePath} id={id} mediaType='movie' />
		</div>
	)
}

export default MovieDetail
