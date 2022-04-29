import { IoPlayCircleOutline } from 'react-icons/io5';

import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';
import OutlineOffset from '@/components/ui/OutlineOffset';

const WhoWeAre = () => {
	return (
		<ContainerLayout className='mx-auto about-us'>
			<h1 className='section-header lg:!text-center'>Who we are</h1>

			<div className='lg:grid lg:grid-cols-[500px,1fr] 2xl:grid-cols-[550px,1fr] gap-7 mt-14'>
				<div className='max-w-5xl mt-10 lg:max-w-full lg:mt-0 about-us space-y-7 lg:h-full'>
					{/* About Us & Video */}
					<div className='w-full p-6 py-8 bg-secondary-700/10'>
						<h2 className='mb-2 heading-2'>How we started</h2>

						<p className='mb-4 leading-relaxed text-center lg:text-left'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
							vel sunt illum repellendus provident laboriosam deleniti
							recusandae quaerat maiores nobis fugit incidunt, molestiae vero at
							perferendis atque ad ex praesentium sapiente temporibus sit fugiat
							iure ducimus. Eligendi mollitia corrupti vero possimus sit totam,
							non cum deleniti illo nemo ratione amet?
						</p>

						<p className='leading-relaxed text-center lg:text-left'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
							vel sunt illum repellendus provident laboriosam deleniti
							recusandae quaerat maiores nobis fugit incidunt, molestiae vero at
							perferendis atque ad ex praesentium sapiente temporibus sit fugiat
							iure ducimus. Eligendi mollitia corrupti vero possimus sit totam,
							non cum deleniti illo nemo ratione amet?
						</p>
					</div>

					<div className='max-w-lg mx-auto lg:max-w-full lg:mx-0 about-video'>
						<div className='flex flex-col items-center gap-4 p-4 py-6 sm:items-start sm:flex-row sm:px-6 sm:py-8 sm:gap-6 lg:gap-8 bg-secondary-700/10'>
							{/* Icon */}
							<div className='w-[50px] h-[50px] lg:w-[60px] min-w-[50px] min-h-[50px] lg:h-[60px] text-3xl lg:text-4xl flex items-center text-primary-500 relative justify-center bg-white border '>
								<IoPlayCircleOutline />

								<OutlineOffset
									outlineColor={'border-secondary-500/50'}
									className='!-right-[5px] !-bottom-[5px] lg:!-right-[6px] lg:!-bottom-[6px]'
								/>
							</div>

							{/* Description */}
							<div className='flex flex-col items-center gap-2 text-center sm:items-start sm:text-left'>
								<h3 className='heading-3 !text-left'>
									Gain insight from Our President
								</h3>
								<p>
									In this video, our president gives you a briefing on the inner
									workings of MOCES along with why you should be a part of us.
								</p>

								<Button
									url='#/link'
									type='nextLink'
									textContent='Watch Now'
									className='mt-4 sm:mt-2 w-fit !text-sm text-white'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-7 bg-primary-500/10 lg:mt-0'>
					<h2 className='p-6 py-10 mb-2 !text-left heading-2 bg-primary-200'>
						Articles of Association
					</h2>

					<ul className='px-6 pt-0 pb-8 space-y-4 divide-y divide-primary-200'>
						{[...Array(4).keys()].map((e, i) => (
							<li key={i} className='pt-4'>
								<h3 className='heading-4 flex items-start gap-3 before:min-w-[10px] before:block before:min-h-[10px] text-secondary-700 before:bg-secondary-700 before:translate-y-2'>
									Article {i + 1} Heading
								</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Deleniti, asperiores.
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</ContainerLayout>
	);
};

export default WhoWeAre;
