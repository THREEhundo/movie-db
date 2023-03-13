const Trailer = ({ ytUrl, ytKey }) => {
	return (
		<div className='relative h-0 pb-[56.25%]'>
			<iframe
				className='absolute top-0 left-0 w-full h-full'
				src={ytUrl + ytKey}
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen></iframe>
		</div>
	)
}

export default Trailer
