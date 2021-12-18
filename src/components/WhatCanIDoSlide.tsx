import { FC } from 'react'
import { Slide } from './Slide'

export const WhatCanIDoSlide: FC = () => {
	return (
		<Slide
			title="What can i do?"
			content={
				<p>
					I can listen to your ideas and ambitions and work with you
					via a collaborative and feedback oriented approach to
					convert them into fully developed Web Applications ready for
					your business' needs.
				</p>
			}
		/>
	)
}
