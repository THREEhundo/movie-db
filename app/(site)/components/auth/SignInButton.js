'use client'

import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import SignOutButton from './signOutButton'

const SignInButton = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<div className='relative h-12 w-12'>
				{session?.user?.image ? (
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='m-1'>
							<Image
								src={session.user.image}
								alt={session.user.name}
								className='inline-block rounded-full'
								width={48}
								height={48}
								sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
							/>
						</label>
						<ul
							tabIndex={0}
							className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<SignOutButton />
							</li>
						</ul>
					</div>
				) : (
					<span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
						<svg
							className='h-full w-full text-gray-300'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
						</svg>
					</span>
				)}
			</div>
		)
	}

	return (
		<button
			className='text-sm font-medium tracking-wider uppercase text-stone-500'
			onClick={() => signIn()}>
			Sign In
		</button>
	)
}

export default SignInButton
