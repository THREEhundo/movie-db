import Searchbar from './components/form/Searchbar'
import TrendingMovies from './TrendingMovies'

export default function Home() {
	return (
		<main className='mx-12 md:mx-32 mb-12'>
			<Searchbar />
			<TrendingMovies />
		</main>
	)
}
