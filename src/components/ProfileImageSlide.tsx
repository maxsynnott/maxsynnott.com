import { FC } from 'react'
import profileImage from '../assets/profile.jpeg'

export const ProfileImageSlide: FC = () => {
	return (
		<div className="slide centered-flex-box">
			<div
				className="profile-image"
				style={{ backgroundImage: `url(${profileImage})` }}
			/>
		</div>
	)
}
