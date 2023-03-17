'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const SearchPage = ({ params }) => {
	const { query } = params
	const [searchResults, setSearchResults] = useState([])
	const [isTablet, setIsTablet] = useState(false)

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
			)
			console.log(res.data.results)
			setSearchResults(res.data.results)
		}
		fetchData()
	}, [query])
	const imagePath = 'https://image.tmdb.org/t/p/original/'

	useEffect(() => {
		async function movieData() {
			const data = await fetch(
				`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
			)
		}
	}, [])

	useEffect(() => {
		const handleResize = () => setIsTablet(window.innerWidth > 768)
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className=' mx-16 md:mx-32 lg:mx-48 mb-12 flex flex-col items-center'>
			Results
			{searchResults.map(
				result =>
					result.poster_path && (
						<Link
							key={result.id}
							href={`/movie/${result.id}`}
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

export default SearchPage
