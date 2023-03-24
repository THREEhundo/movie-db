import Image from 'next/image'
import Cast from '../../components/media/cast'
import Trailer from '../../components/media/trailer'
import Movie from './movie'

const Page = ({ params }) => {
	return <Movie params={params} />
}

export default Page
