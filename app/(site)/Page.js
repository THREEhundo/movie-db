import Searchbar from './components/form/searchbar'
import TrendingMovies from './trendingMovies'

export default function Home() {
	return (
		<main className='mx-12 md:mx-32 mb-12'>
			<Searchbar />
			<TrendingMovies />
		</main>
	)
}
