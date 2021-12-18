import { FC } from 'react'

interface Props {
	text: string
	href: string
	brandClassName: string
}

export const SocialLink: FC<Props> = ({ text, href, brandClassName }) => {
	return (
		<a
			className={['social-link', brandClassName].join(' ')}
			href={href}
			target="_blank"
		>
			{text}
		</a>
	)
}
