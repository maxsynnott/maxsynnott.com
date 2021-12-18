import { FC, useState } from 'react'
import { animated, useSpring } from 'react-spring'

const DEFAULT_BACKGROUND_COLOR = '#111111'
const DEFAULT_COLOR = '#777777'

interface Props {
	text: string
	href: string
	hoverBackgroundColor: string
	hoverColor: string
}

export const SocialLink: FC<Props> = ({
	text,
	href,
	hoverBackgroundColor,
	hoverColor,
}) => {
	const [hovered, setHovered] = useState(false)
	const backgroundColor = hovered
		? hoverBackgroundColor
		: DEFAULT_BACKGROUND_COLOR
	const color = hovered ? hoverColor : DEFAULT_COLOR
	const styles = useSpring({
		backgroundColor,
		color,
		config: { clamp: true },
	})

	return (
		<animated.a
			className="social-link"
			style={styles}
			href={href}
			target="_blank"
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{text}
		</animated.a>
	)
}
