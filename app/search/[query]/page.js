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
	//const { search } = params
	//const [results, setResults] = useState([])
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
		<div className=' mx-16 md:mx-32 lg:mx-48 mb-12'>
			<div>
				Search Page
				{searchResults.map(result => (
					<div key={result.id}>
						{/*<Link
						key={result.id}
						className=''
						href={`/movie/${result.id}`}>*/}
						<figure className='flex flex-col md:flex-row items-center bg-slate-100 rounded-xl p-0 dark:bg-slate-800 '>
							{/*md:max-h-[274px] overflow-hidden*/}
							<Image
								className='w-[33.33%] object-cover md:mr-5 h-full rounded-none mx-auto'
								src={imagePath + result.poster_path}
								alt={result.title || result.name}
								width={384}
								height={576}
							/>
							<div className='p-6 md:p-8 text-center md:text-left space-y-4'>
								<figcaption className='font-medium'>
									<div className='text-sky-500 dark:text-sky-400'>
										<Link href={`/movie/${result.id}`}>
											{result.title || result.name}
										</Link>
									</div>
									<div className='text-slate-700 dark:text-slate-500'>
										{result.release_date}
									</div>
								</figcaption>
								<blockquote>
									<p className='text-sm font-small'>
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
								</blockquote>
							</div>
						</figure>
						{/*</Link>*/}
					</div>
				))}
			</div>
		</div>
	)
}

const ShortenedText = ({ text, maxLength, linkText, linkUrl }) => {
	if (text.length <= maxLength) {
		return text
	}

	const shortenedText = text.substr(0, maxLength)
	const lastSpaceIndex = shortenedText.lastIndexOf(' ')
	const shortenedTextWithoutWordBreak = shortenedText.substr(
		0,
		lastSpaceIndex
	)
	const link = (
		<Link className='text-blue-600' href={linkUrl}>
			{linkText}
		</Link>
	)

	return (
		<span className='text-sm font-medium'>
			{shortenedTextWithoutWordBreak} {link}
		</span>
	)
}

export default SearchPage
