import './globals.css'
import { JetBrains_Mono } from '@next/font/google'
import Nav from './nav'
import Provider from './provider'

const jetBrainsMono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
	variable: '--font-jetBrainsMono'
})

export const metadata = {
	title: 'Silver Screen Wikipedia',
	description: 'Current Movies Database web app'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='dark'>
			<body className={jetBrainsMono.className}>
				<Provider>
					<Nav />
					{children}
				</Provider>
			</body>
		</html>
	)
}
