import Movie from './Movie'
import Search from './Search'
import SearchProvider from './search-provider'

export default async function Home({ Component, pageProps }) {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
	)
	const res = await data.json()

	console.table(res.results)

	return (
		<main className='mx-32 mb-12'>
			<SearchProvider>
				<Search pageProps={pageProps} />
			</SearchProvider>
			<h1 className='text-4xl text-center my-10'>
				Popular Movies Wikipedia 🎥
			</h1>
			<h2 className='text-2xl text-center my-3'>Trending 📈</h2>
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
