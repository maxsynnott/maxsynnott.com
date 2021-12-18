import { FC } from 'react'
import { AnimatedChar } from './AnimatedChar'

const COLORS = ['#F75C03', '#D90368', '#820263', '#291720', '#04A777']

export const TitleSlide: FC = () => {
	const chars = 'Software Engineer'
		.split('')
		.map((char, i) => (
			<AnimatedChar
				key={i}
				char={char}
				hoverColor={COLORS[i % COLORS.length]}
			/>
		))
	return <h1 className="title">{chars}</h1>
}
