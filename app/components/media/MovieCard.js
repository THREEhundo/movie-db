import Link from 'next/link'
import Image from 'next/image'

const MovieCard = ({ title, id, poster_path, release_date, priority, i }) => {
	const imagePath = 'https://image.tmdb.org/t/p/original'

	return (
		<div
			key={id}
			className='max-w-sm  rounded-lg shadow bg-gray-800 border-gray-700'>
			<Link href={`/movie/${id}`}>
				<Image
					className='rounded-t-lg'
					src={imagePath + poster_path}
					alt={`${title} poster`}
					width={800}
					height={800}
					i={i}
					priority={(i == 0 || i == 1) && true}
				/>
			</Link>
			<div className='p-5'>
				<Link href={`/movie/${id}`}>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
						{title}
					</h5>
				</Link>
				<p className='mb-3 font-normal text-gray-400'>
					Release Date: {release_date}
				</p>
			</div>
		</div>
	)
}

export default MovieCard
