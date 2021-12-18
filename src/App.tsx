import { FC } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

export const App: FC = () => {
	return (
		<>
			<Header />
			<Content />
			<Footer />
		</>
	)
}

export default App
