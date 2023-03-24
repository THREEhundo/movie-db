import Image from 'next/image'

const Cast = async ({ imagePath, id, mediaType }) => {
	// Fetch Cast
	const castData = await fetch(
		`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const castRes = await castData.json()

	const feedUrl = url =>
		url !== null ? imagePath + url : 'http://via.placeholder.com/256x384'

	return (
		<>
			<h2 className='text-2xl'>Cast</h2>
			<section className='flex flex-wrap justify-center gap-4 w-full'>
				{castRes.cast?.map(
					(actor, i) =>
						i < 6 &&
						actor.known_for_department && (
							<div
								key={actor.id}
								className='flex-auto max-w-[100px]'>
								<Image
									width={256}
									height={384}
									src={feedUrl(actor.profile_path)}
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
