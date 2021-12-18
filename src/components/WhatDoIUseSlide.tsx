import { FC } from 'react'
import { Slide } from './Slide'
import { Highlight } from './Highlight'

export const WhatDoIUseSlide: FC = () => {
	return (
		<Slide
			title="What do i use?"
			content={
				<p>
					I prefer to work with whichever tools are best suited to
					each individual project and therefore have a large breadth
					of experience working with dozens of languages, frameworks
					and technologies.
					<br />
					<br />
					The technologies I have the most professional experience
					with are:
					<br />
					<br />
					Frontend: <Highlight text="React" color="#61dafb" /> (
					<Highlight text="Typescript" color="#3178C6" />
					)
					<br />
					Backend: <Highlight text="Node" color="#68A063" /> (
					<Highlight text="Typescript" color="#3178C6" />
					)
					<br />
					Hosting: <Highlight text="AWS" color="#FF9900" />
				</p>
			}
		/>
	)
}
