import { FC, useState } from 'react'
import { animated, useSpring } from 'react-spring'

const DEFAULT_COLOR = '#777777'

interface Props {
	char: string
	hoverColor: string
}

export const AnimatedChar: FC<Props> = ({ char, hoverColor }) => {
	const [hovered, setHovered] = useState(false)
	const styles = useSpring({
		color: hovered ? hoverColor : DEFAULT_COLOR,
		config: { mass: 10, tension: 1000 },
	})

	return (
		<animated.span
			style={styles}
			onPointerEnter={() => setHovered(true)}
			onPointerLeave={() => setHovered(false)}
		>
			{char}
		</animated.span>
	)
}
