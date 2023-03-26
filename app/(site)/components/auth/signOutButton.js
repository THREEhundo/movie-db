'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

const SignOutButton = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<button
				className='text-sm font-medium tracking-wider uppercase text-stone-500'
				onClick={() => signOut()}>
				Sign Out
			</button>
		)
	}
}

export default SignOutButton
