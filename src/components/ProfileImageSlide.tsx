import { FC } from 'react'
import profileImage from '../assets/profile.jpeg'

export const ProfileImageSlide: FC = () => {
	return (
		<div className="slide">
			<div
				className="profile-image"
				style={{ backgroundImage: `url(${profileImage})` }}
			/>
		</div>
	)
}
