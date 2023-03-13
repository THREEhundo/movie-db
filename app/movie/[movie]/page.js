import Image from 'next/image'

const MovieDetail = async ({ params }) => {
	const { movie } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIE_API_KEY}`
	)
	const res = await data.json()

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
				<div className='relative h-0 pb-[56.25%]'>
					<iframe
						className='absolute top-0 left-0 w-full h-full'
						src={ytUrl + ytKey}
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen></iframe>
				</div>
			</div>
		</div>
	)
}

export default MovieDetail
