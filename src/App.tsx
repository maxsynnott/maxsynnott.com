import { FC } from "react";
import { SocialLink } from "./components/SocialLink";

const links = [
	{ text: "instagram", href: "https://www.instagram.com/synnott.max" },
	{ text: "linkedin", href: "https://www.linkedin.com/in/maxsynnott/" },
	{ text: "github", href: "https://www.github.com/maxsynnott" },
	{
		text: "email",
		href: `mailto:maxryansynnott@gmail.com?subject=${encodeURIComponent(
			"Please work for me!"
		)}`,
	},
];

export const App: FC = () => {
	return (
		<>
			<div className="header">
				<h2 className="name">Max Synnott</h2>
			</div>
			<div className="content">
				<h1 className="title full-width">Software Engineer</h1>
			</div>
			<div className="footer">
				{links.map(({ text, href }) => (
					<SocialLink text={text} href={href} />
				))}
			</div>
		</>
	);
};

export default App;
