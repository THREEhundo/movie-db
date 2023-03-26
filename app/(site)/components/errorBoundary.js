import { useState } from 'react'

function ErrorBoundary({ children }) {
	const [hasError, setHasError] = useState(false)

	const handleError = () => {
		setHasError(true)
	}

	return hasError ? null : (
		<>
			<ErrorBoundaryFallback />
			{children}
		</>
	)
}

function ErrorBoundaryFallback() {
	return (
		<div>
			<h1>Oops! Something went wrong.</h1>
			<p>Please try again later.</p>
		</div>
	)
}

export default ErrorBoundary
