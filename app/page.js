import Movie from './Movie'
import Searchbar from './components/form/Searchbar'

export default async function Home({ Component, pageProps }) {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()

	return (
		<main className='mx-12 md:mx-32 mb-12'>
			<Searchbar pageProps={pageProps} />
			<h1 className='text-4xl text-center my-10'>
				Popular Movies Wikipedia 🎥
			</h1>
			<h2 className='text-2xl text-center my-3'>Trending 📈</h2>
			<div className='grid gap-14 grid-cols-fluid justify-center'>
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
