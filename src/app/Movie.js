import Link from 'next/link'
import Image from 'next/image'

const Movie = ({ title, id, poster_path, release_date }) => {
	const imagePath = 'https://image.tmdb.org/t/p/original'
	console.log(poster_path)
	return (
		<div key={id}>
			<h1>{title}</h1>
			<h2>Release Date: {release_date}</h2>
			<Link href={'/'}>
				<Image
					src={imagePath + poster_path}
					alt={`${title} poster`}
					width={800}
					height={800}
				/>
			</Link>
		</div>
	)
}

export default Movie
