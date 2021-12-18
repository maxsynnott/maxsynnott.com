import { FC } from 'react'
import { SocialLink } from './SocialLink'

const links = [
	{
		text: 'instagram',
		href: 'https://www.instagram.com/synnott.max',
		brandClassName: 'instagram',
		hoverColor: '#FFFFFF',
		hoverBackgroundColor: '#f77737',
	},
	{
		text: 'linkedin',
		href: 'https://www.linkedin.com/in/maxsynnott/',
		brandClassName: 'linkedin',
		hoverColor: '#FFFFFF',
		hoverBackgroundColor: '#2867b2',
	},
	{
		text: 'github',
		href: 'https://www.github.com/maxsynnott',
		brandClassName: 'github',
		hoverColor: '#FFFFFF',
		hoverBackgroundColor: '#333',
	},
	{
		text: 'email',
		href: `mailto:maxryansynnott@gmail.com?subject=${encodeURIComponent(
			'Please work for me!',
		)}`,
		brandClassName: 'email',
		hoverColor: '#FFFFFF',
		hoverBackgroundColor: '#111111',
	},
]

export const Footer: FC = () => {
	return (
		<>
			<div className="footer">
				<div className="social-links-container">
					{links.map((props, i) => (
						<SocialLink key={i} {...props} />
					))}
				</div>
			</div>
		</>
	)
}
