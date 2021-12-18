import { FC } from 'react'

interface Props {
	text: string
	color: string
}

export const Highlight: FC<Props> = ({ text, color }) => {
	return <span style={{ color }}>{text}</span>
}
