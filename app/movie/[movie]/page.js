import Image from 'next/image'
import Cast from './Cast'
import Trailer from './Trailer'

const MovieDetail = async ({ params }) => {
	const { movie } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'

	// Fetch Movie Details
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIE_API_KEY}`
	)
	const res = await data.json()

	// Fetch Youtube Link
	const youtubeData = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${process.env.MOVIE_API_KEY}`
	)
	const youtubeRes = await youtubeData.json()
	const ytUrl = 'https://youtube.com/embed/'
	const ytKey = youtubeRes.results.filter(x =>
		x.name.includes('Official Trailer')
	)[0].key

	return (
		<div>
			<h2 className='text-2xl'>{res.title}</h2>
			<h2 className='text-lg'>{res.release_date}</h2>
			<h2>Runtime: {res.runtime} minutes</h2>
			<h2 className='bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md'>
				{res.status}
			</h2>
			<Image
				className='my-12 w-full'
				src={imagePath + res.backdrop_path}
				alt={`${res.title} Poster`}
				width={1000}
				height={1000}
				priority
			/>
			<p>{res.overview}</p>

			<Trailer ytUrl={ytUrl} ytKey={ytKey} />
			<Cast imagePath={imagePath} movie={movie} />
		</div>
	)
}

export default MovieDetail
