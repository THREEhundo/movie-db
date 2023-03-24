'use client'

import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { DropdownDivider } from 'flowbite-react/lib/esm/components/Dropdown/DropdownDivider'
import { DropdownHeader } from 'flowbite-react/lib/esm/components/Dropdown/DropdownHeader'
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem'
import { NavbarCollapse } from 'flowbite-react/lib/esm/components/Navbar/NavbarCollapse'
import { NavbarToggle } from 'flowbite-react/lib/esm/components/Navbar/NavbarToggle'
import Link from 'next/link'

const Nav = () => {
	return (
		<Navbar fluid={true} rounded={true} className='bg-slate-700'>
			<Link href='/' className='bg-inherit'>
				<span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
					Silver Screen 🎥
				</span>
			</Link>
			<div className='flex md:order-2'>
				<Dropdown
					arrowIcon={false}
					inline={true}
					label={
						<Avatar
							alt='User settings'
							img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
							rounded={true}
						/>
					}>
					<DropdownHeader>
						<span className='block text-sm'>Bonnie Green</span>
						<span className='block truncate text-sm font-medium'>
							name@flowbite.com
						</span>
					</DropdownHeader>
					<DropdownItem>Dashboard</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Earnings</DropdownItem>
					<DropdownDivider />
					<DropdownItem>Sign out</DropdownItem>
				</Dropdown>
				<NavbarToggle />
			</div>
			<NavbarCollapse>
				<Dropdown
					label='Movies'
					inline={true}
					placement='bottom'
					className='bg-slate-700'>
					<Link href='/movie/popular'>
						<DropdownItem>Popular</DropdownItem>
					</Link>
					<Link href='/movie/nowPlaying'>
						<DropdownItem>Now Playing</DropdownItem>
					</Link>
					<Link href='/movie/upcoming'>
						<DropdownItem>Upcoming</DropdownItem>
					</Link>
					<Link href='/movie/topRated'>
						<DropdownItem>Top Rated</DropdownItem>
					</Link>
				</Dropdown>
				<Dropdown label='TV' inline={true} placement='bottom'>
					<Link href='/tv/popular'>
						<DropdownItem>Popular</DropdownItem>
					</Link>
					<Link href='/tv/onAir'>
						<DropdownItem>On Air</DropdownItem>
					</Link>
					<Link href='/tv/topRated'>
						<DropdownItem>Top Rated</DropdownItem>
					</Link>
				</Dropdown>
			</NavbarCollapse>
		</Navbar>
	)
}

export default Nav
