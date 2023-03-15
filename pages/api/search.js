import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (NextApiRequest, NextApiResponse) => {
	console.log('AT THE API')
	NextApiResponse.status(200).json({ message: 'hey dude!' })
}

export default handler
