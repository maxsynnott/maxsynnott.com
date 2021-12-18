import { FC } from 'react'
import { animated, useSpring } from 'react-spring'
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

	const chevronStyles = useSpring({
		from: { opacity: 0 },
		to: { opacity: 0.33 },
		config: { duration: 1000 },
		delay: 3000,
		loop: { reverse: true, delay: 100 },
	})
	return (
		<>
			<h1 className="title">{chars}</h1>
			<animated.div className="chevron" style={chevronStyles}>
				{'>'}
			</animated.div>
		</>
	)
}
