import { FC, ReactElement } from 'react'

interface Props {
	title: string
	content: ReactElement
}

export const Slide: FC<Props> = ({ title, content }) => {
	return (
		<div className="slide">
			<h2 className="slide-title">{title}</h2>
			{content}
		</div>
	)
}
