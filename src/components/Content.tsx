import { FC, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { TitleSlide } from './TitleSlide'
import { WhoAmISlide } from './WhoAmISlide'
import { WhatCanIDoSlide } from './WhatCanIDoSlide'
import { WhatDoIUseSlide } from './WhatDoIUseSlide'
import { ProfileImageSlide } from './ProfileImageSlide'

const slides = [
	<TitleSlide />,
	<WhoAmISlide />,
	<WhatCanIDoSlide />,
	<WhatDoIUseSlide />,
	<ProfileImageSlide />,
]

export const Content: FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [chevronStyles, springApi] = useSpring(() => ({
		from: { opacity: 0 },
		to: { opacity: 0.33 },
		config: { duration: 1000 },
		delay: 3000,
		loop: { reverse: true, delay: 100 },
	}))
	useEffect(() => {
		if (currentSlide > 0) springApi.set({ opacity: 0 })
	}, [currentSlide])

	return (
		<div className="content">
			<div
				className="slideshow"
				onClick={() =>
					setCurrentSlide((currentSlide + 1) % slides.length)
				}
			>
				{slides.map((slide, i) => {
					const left = (i - currentSlide) * 100 + '%'
					const styles = useSpring({ left })
					return (
						<animated.div
							key={i}
							className="slide-container"
							style={styles}
						>
							{slide}
						</animated.div>
					)
				})}

				<animated.div className="chevron" style={chevronStyles}>
					{'>'}
				</animated.div>
			</div>
		</div>
	)
}
