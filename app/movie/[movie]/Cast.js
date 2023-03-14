import Image from 'next/image'

const Cast = async ({ imagePath, movie }) => {
	// Fetch Cast
	const castData = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const castRes = await castData.json()

	return (
		<>
			<h2 className='text-2xl'>Cast</h2>
			<section className='flex flex-nowrap gap-4 w-full'>
				{castRes.cast.map(
					(actor, i) =>
						i < 6 && (
							<div key={actor.id} className='flex-auto'>
								<Image
									width={150}
									height={600}
									src={imagePath + actor.profile_path}
									alt={`${actor.name}`}
									//contain
									className='w-full relative'
								/>
								<h3 className='text-sm'>{actor.name}</h3>
								<h3 className='text-xs text-gray-500'>
									{actor.character}
								</h3>
							</div>
						)
				)}
			</section>
		</>
	)
}

export default Cast
