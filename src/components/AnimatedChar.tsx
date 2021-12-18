import { FC, useState } from 'react'
import { animated, useSpring } from 'react-spring'

interface Props {
	char: string
	hoverColor: string
}

export const AnimatedChar: FC<Props> = ({ char, hoverColor }) => {
	const [hovered, setHovered] = useState(false)
	const styles = useSpring({
		color: hovered ? hoverColor : '#777777',
		config: { mass: 10, tension: 1000 },
	})

	return (
		<animated.span
			style={styles}
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{char}
		</animated.span>
	)
}
