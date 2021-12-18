import { FC } from 'react'

interface Props {
	text: string
	href: string
}

export const SocialLink: FC<Props> = ({ text, href }) => {
	return (
		<a className="social-link" href={href} target="_blank">
			{text}
		</a>
	)
}
