import NextAuth from 'next-auth'
import prisma from '../../../lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET
			})
		],

		pages: {
			//signIn: '/auth/signin',
			//signOut: '/auth/signout',
			//error: '/auth/error', // Error code passed in query string as ?error=
			//verifyRequest: '/auth/verify-request', // (used for check email message)
			//newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
		},

		adapter: PrismaAdapter(prisma),

		session: {
			strategy: 'jwt'
		}
	})
}
