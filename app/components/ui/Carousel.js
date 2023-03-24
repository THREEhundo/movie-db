'use client'

import { Carousel } from 'flowbite-react'
import { useEffect, useState } from 'react'

const MediaCarousel = ({ movieIds }) => {
	const [youtubeKeys, setYoutubeKeys] = useState([])
	const youtubeUrl = 'https://youtube.com/embed/'

	useEffect(() => {
		const getKeys = async () => {
			try {
				const results = await Promise.all(
					movieIds.map(async id => {
						const data = await fetch(
							`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
						)
						const res = await data.json()
						const key = res.results.find(
							x =>
								x.name.includes('Intro') ||
								x.name.includes('Trailer')
						)?.key
						return key
							? youtubeUrl +
									key +
									'?autoplay=1&mute=1&enablejsapi=1'
							: null
					})
				)
				setYoutubeKeys(results)
			} catch (error) {
				console.error(error)
			}
		}
		getKeys()
	}, [movieIds])

	return (
		<div className='h-full w-full sm:h-64 xl:h-80 2xl:h-96'>
			<Carousel slide={false}>
				{youtubeKeys.map((youtubeKey, i) => (
					<div
						key={youtubeKey}
						className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
						<iframe
							className='absolute top-0 left-0 w-full h-full'
							src={youtubeKey}
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen></iframe>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default MediaCarousel
