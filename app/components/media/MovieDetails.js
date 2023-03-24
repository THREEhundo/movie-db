import Image from 'next/image'

const MovieDetails = ({
	title,
	releaseDate,
	runtime,
	status,
	posterUrl,
	overview
}) => {
	return (
		<>
			<h1 className='text-2xl'>{title}</h1>
			<h2 className='text-lg'>{releaseDate}</h2>
			<h2>Runtime: {runtime} minutes</h2>
			<h2 className='bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md'>
				{status}
			</h2>
			<Image
				className='my-12 w-full'
				src={posterUrl}
				alt={`${title} Poster`}
				width={1000}
				height={1000}
				priority
			/>
			<p>{overview}</p>
		</>
	)
}

export default MovieDetails
