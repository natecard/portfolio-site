import { SiReact, SiTypescript, SiTailwindcss } from '@icons-pack/react-simple-icons';

export default function Projects() {
	return (
		<div className="flex flex-col px-2">
			<div className="project grow pt-16">
				<h2 className="pb-8 text-center text-5xl">Project Title 1</h2>
				<img
					className="projectImg bg-darkLiver h-80 w-80 items-center"
					src="../img/subforuma.png"
					alt="project screen shot"
				/>
				<div className="languageContainer flex flex-row">
					<div className="m- language border-darkBlack bg-greyButton m-4 h-8 w-24 rounded-md border-2 text-center">
						<SiReact />
					</div>
					<div className="m- language border-darkBlack bg-greyButton m-4 h-8 w-24 rounded-md border-2 text-center">
						<SiTypescript />
					</div>
					<div className="m- language border-darkBlack bg-greyButton m-4 h-8 w-24 rounded-md border-2 text-center">
						<SiTailwindcss />
					</div>
				</div>
				<p className="w-80">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales arcu in eros
					interdum aliquet. Maecenas vitae rutrum metus, sed tincidunt justo. Donec sollicitudin,
					dolor auctor cursus imperdiet, lacus arcu posuere eros, vitae gravida mauris lorem vitae
					felis. Phasellus nunc lectus, tincidunt eu enim ut, pretium tristique metus. Cras rhoncus
					justo mauris, vulputate commodo eros laoreet vitae...
				</p>
				<div className="readMore m- language border-darkBlack bg-darkLiver text-whiteish m-4 h-8 w-24 rounded-md border-2 text-center">
					Read More
				</div>
			</div>
		</div>
	);
}
