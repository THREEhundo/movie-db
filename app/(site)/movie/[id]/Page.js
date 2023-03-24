import Image from 'next/image'
import Cast from '../../components/media/Cast'
import Trailer from '../../components/media/Trailer'
import Movie from './Movie'

const Page = ({ params }) => {
	return <Movie params={params} />
}

export default Page
