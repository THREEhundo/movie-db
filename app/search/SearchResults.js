'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchResults = ({ params }) => {
	const [searchResults, setSearchResults] = useState([])
	const [isTablet, setIsTablet] = useState(false)

	const search = useSearchParams()
	const searchQuery = search ? search?.get('query') : null

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
			)
			setSearchResults(res.data.results)
		}
		fetchData()
	}, [searchQuery])
	const imagePath = 'https://image.tmdb.org/t/p/original/'

	useEffect(() => {
		const handleResize = () => setIsTablet(window.innerWidth > 768)
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className='mb-12 flex flex-col items-center'>
			{searchResults.map(
				result =>
					result.poster_path && (
						<Link
							key={result.id}
							href={`/${result.media_type}/${result.id}`}
							className='flex flex-col items-center  border rounded-lg shadow md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 hover:bg-gray-700 my-3'>
							<Image
								className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
								src={imagePath + result.poster_path}
								alt={result.title || result.name}
								width={384}
								height={576}
							/>
							<div className='flex flex-col justify-between p-4 leading-normal'>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
									{result.title || result.name}
								</h5>
								<p className='mb-3 font-normal text-gray-400'>
									{!isTablet ? (
										<ShortenedText
											text={result.overview}
											maxLength={200}
											linkText='...Read More'
											linkUrl={`/movie/${result.id}`}
										/>
									) : (
										<ShortenedText
											text={result.overview}
											maxLength={400}
											linkText='...Read More'
											linkUrl={`/movie/${result.id}`}
										/>
									)}
								</p>
							</div>
						</Link>
					)
			)}
		</div>
	)
}

const ShortenedText = ({ text, maxLength, linkText }) => {
	if (text.length <= maxLength) {
		return text
	}

	const shortenedText = text.substr(0, maxLength)
	const lastSpaceIndex = shortenedText.lastIndexOf(' ')
	const shortenedTextWithoutWordBreak = shortenedText.substr(
		0,
		lastSpaceIndex
	)
	const link = <span className='text-blue-600'>{linkText}</span>

	return (
		<span>
			{shortenedTextWithoutWordBreak} {link}
		</span>
	)
}

export default SearchResults
