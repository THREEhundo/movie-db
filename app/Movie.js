import Link from 'next/link'
import Image from 'next/image'

const Movie = ({ title, id, poster_path, release_date, priority, i }) => {
	const imagePath = 'https://image.tmdb.org/t/p/original'

	return (
		<div key={id}>
			<h1>{title}</h1>
			<h2>Release Date: {release_date}</h2>
			<Link href={`/movie/${id}`}>
				<Image
					src={imagePath + poster_path}
					alt={`${title} poster`}
					width={800}
					height={800}
					i={i}
					priority={(i == 0 || i == 1) && true}
				/>
			</Link>
		</div>
	)
}

export default Movie
