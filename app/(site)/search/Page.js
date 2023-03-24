import Searchbar from '../components/form/searchbar'
import SearchResults from './searchResults'

const SearchPage = ({ params }) => {
	return (
		<div className='mx-12 md:mx-32 mb-12'>
			<h1 className='text-4xl text-center'>Results</h1>
			<Searchbar />
			<SearchResults />
		</div>
	)
}

export default SearchPage
