import Image from 'next/image'
import Cast from '../../components/media/Cast'
import Trailer from '../../components/media/Trailer'

const TvShow = async ({ params }) => {
	const { id } = params
	const imagePath = 'https://image.tmdb.org/t/p/original'

	const data = await fetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const tvRes = await data.json()
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
			<h2 className='text-2xl'>{tvRes.original_name}</h2>
			<h2 className='text-lg'>{tvRes.release_date}</h2>
			<h2>Runtime: {tvRes.runtime} minutes</h2>
			<h2
				className={
					tvRes.status == 'Canceled'
						? 'bg-red-600 text-sm inline-block my-2 py-2 px-4 rounded-md'
						: 'bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md'
				}>
				{tvRes.status}
			</h2>
			<Image
				className='my-12 w-full'
				src={imagePath + tvRes.backdrop_path}
				alt={`${tvRes.title} Poster`}
				width={1000}
				height={1000}
				priority
			/>
			<p>{tvRes.overview}</p>
			{youtubeKey && (
				<Trailer youtubeUrl={youtubeUrl} youtubeKey={youtubeKey} />
			)}
			<Cast imagePath={imagePath} id={id} mediaType='tv' />
		</div>
	)
}

export default TvShow
