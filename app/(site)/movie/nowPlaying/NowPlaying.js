import React from 'react'
import Searchbar from '../../components/form/Searchbar'
import MovieCard from '../../components/media/MovieCard'

const NowPlaying = async () => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&page=1`
	)
	const res = await data.json()

	return (
		<>
			<Searchbar />
			<h1 className='text-4xl text-center my-10'>
				Movies Now Playing 🎥
			</h1>
			<div className='mx-12 md:mx-32 mb-12 grid gap-14 grid-cols-fluid justify-center'>
				{res.results.map((movie, i) => (
					<MovieCard
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster_path={movie.poster_path}
						release_date={movie.release_date}
						priority
						i={i}
					/>
				))}
			</div>
		</>
	)
}

export default NowPlaying
