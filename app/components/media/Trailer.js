const Trailer = ({ youtubeUrl, youtubeKey }) => {
	console.log(`youtube tv key: ${youtubeKey}`)
	return (
		<div className='relative h-0 pb-[56.25%]'>
			<iframe
				className='absolute top-0 left-0 w-full h-full'
				src={youtubeUrl + youtubeKey}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen></iframe>
		</div>
	)
}

export default Trailer
