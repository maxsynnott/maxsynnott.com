import { FC } from 'react'
import { SocialLink } from './SocialLink'

const links = [
	{ text: 'instagram', href: 'https://www.instagram.com/synnott.max' },
	{ text: 'linkedin', href: 'https://www.linkedin.com/in/maxsynnott/' },
	{ text: 'github', href: 'https://www.github.com/maxsynnott' },
	{
		text: 'email',
		href: `mailto:maxryansynnott@gmail.com?subject=${encodeURIComponent(
			'Please work for me!',
		)}`,
	},
]

export const Footer: FC = () => {
	return (
		<div className="footer">
			{links.map(({ text, href }) => (
				<SocialLink text={text} href={href} />
			))}
		</div>
	)
}
