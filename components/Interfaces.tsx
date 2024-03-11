import { IconType } from '@icons-pack/react-simple-icons';

export interface projects {
	title: string;
	img: string;
	language1: string;
	language2: string;
	language3: string;
	language1Icon: IconType | string;
	language2Icon: IconType | string;
	language3Icon: IconType | string;
	readme: JSX.Element | string;
	githubUrl: string;
	liveDemo: string;
}
export interface LandingProps {
	className: string;
}
export interface AboutMeProps {
	className: string;
}
// export interface PostProps {
// 	title: string;
// 	id: string;
// 	body: string;
// 	slug: string;
// }
