import { FC } from 'react'
import { SocialLink } from './SocialLink'

const links = [
	{
		text: 'instagram',
		href: 'https://www.instagram.com/synnott.max',
		brandClassName: 'instagram',
	},
	{
		text: 'linkedin',
		href: 'https://www.linkedin.com/in/maxsynnott/',
		brandClassName: 'linkedin',
	},
	{
		text: 'github',
		href: 'https://www.github.com/maxsynnott',
		brandClassName: 'github',
	},
	{
		text: 'email',
		href: `mailto:maxryansynnott@gmail.com?subject=${encodeURIComponent(
			'Please work for me!',
		)}`,
		brandClassName: 'email',
	},
]

export const Footer: FC = () => {
	return (
		<>
			<div className="footer">
				<div className="social-links-container">
					{links.map(({ text, href, brandClassName }) => (
						<SocialLink
							key={text}
							text={text}
							href={href}
							brandClassName={brandClassName}
						/>
					))}
				</div>
			</div>
		</>
	)
}
