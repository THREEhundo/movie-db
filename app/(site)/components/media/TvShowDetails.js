import Image from 'next/image'

const TvShowDetails = ({
	originalName,
	releaseDate,
	status,
	backdropPath,
	overview,
	episodes,
	seasons
}) => {
	return (
		<>
			<h2 className='text-2xl'>{originalName}</h2>
			<h2 className='text-lg'>{releaseDate}</h2>
			<h2>{seasons} Seasons</h2>
			<h3>{episodes} Episodes</h3>
			<h2
				className={
					status == 'Canceled'
						? 'bg-red-600 text-sm inline-block my-2 py-2 px-4 rounded-md'
						: 'bg-green-600 text-sm inline-block my-2 py-2 px-4 rounded-md'
				}>
				{status}
			</h2>
			<Image
				className='my-12 w-full'
				src={backdropPath}
				alt={`${originalName} Poster`}
				width={1000}
				height={1000}
				priority
			/>
			<p>{overview}</p>
		</>
	)
}

export default TvShowDetails
