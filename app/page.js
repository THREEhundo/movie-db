import Movie from './Movie'

export default async function Home() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
	)
	const res = await data.json()

	return (
		<main>
			<h1 className='text-4xl text-center my-10'>
				Popular Movies Wikipedia 🎥
			</h1>
			<h2 className='text-2xl'>Trending</h2>
			<div className='grid gap-14 grid-cols-fluid'>
				{res.results.map((movie, i) => (
					<Movie
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
		</main>
	)
}
