import SearchResults from './SearchResults'

const SearchPage = ({ params }) => {
	return (
		<div>
			<h1 className='text-4xl text-center'>Results</h1>
			<SearchResults />
		</div>
	)
}

export default SearchPage
