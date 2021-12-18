import { FC } from 'react'
import { Slide } from './Slide'

export const WhoAmISlide: FC = () => {
	return (
		<Slide
			title="Who am i?"
			content={
				<p>
					I'm a curious and excitable person always looking for new
					experiences. I'm originally from New Zealand but left in
					2016 to follow my passion for travel. Since then I have been
					lucky enough to see and experience dozens of beautiful
					countries across every continent. I've now combined my
					passions for travel and software and am practising a Digital
					Nomad lifestyle.
				</p>
			}
		/>
	)
}
