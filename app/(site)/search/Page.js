import SearchResults from './searchResults'

const SearchPage = ({ params }) => {
	return (
		<div className='mx-12 md:mx-32 mb-12 min-h-screen'>
			<h1 className='text-4xl text-center'>Results</h1>
			<SearchResults />
		</div>
	)
}

export default SearchPage
