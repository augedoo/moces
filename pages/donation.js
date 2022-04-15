import React from 'react';
import { MdOutlineSafetyDivider } from 'react-icons/md';
import { AiOutlineSafety } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { GiTakeMyMoney } from 'react-icons/gi';
import { CgArrowLongRight } from 'react-icons/cg';
import OutlineOffset from '@/components/ui/OutlineOffset';

import showcase_img from '@/assets/images/temp/showcase-img.jpg';
import showcase_image_lg from '@/assets/images/temp/showcase_image_lg.jpg';
// import current_project_img from '@/assets/images/temp/current_project.jpg';
import QuickDonation from '@/components/donation/QuickDonation';
import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';

const causes = [
	{
		title: 'Sponsorship Support',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '/sponsorship',
	},
	{
		title: 'Voluntary Support',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '#/voluntary',
	},
	{
		title: 'Start a Foundation',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '#/foundation',
	},
];

const values = [
	{
		icon: <MdOutlineSafetyDivider />,
		text: 'Know your beneficiary. We’ll share their name, picture and more.',
	},
	{
		icon: <TiDocumentText />,
		text: 'Stay updated about how your contribution is making impact through our reports.',
	},
	{
		icon: <GiTakeMyMoney />,
		text: 'Your choice to give monthly will make a long lasting impact.',
	},
	{
		icon: <AiOutlineSafety />,
		text: 'Every beneficiary you support is under the protection of the Give Assurance non-profits.',
	},
];

const Donation = () => {
	const renderItems = (items) =>
		items.map((item, index) => (
			<div
				key={index}
				className='flex gap-4 px-4 py-3 border shadow lg:gap-4 lg:py-6 lg:px-3 2xl:p-5'
			>
				{/* Icon */}
				<div className='w-[40px] h-[40px] min-w-[40px] lg:w-[60px] lg:min-w-[60px] lg:h-[60px] text-3xl lg:text-4xl flex items-center text-primary-500 relative justify-center bg-primary-50 border '>
					{item.icon}

					<OutlineOffset
						outlineColor={'border-gray-500/50'}
						className='-right-[5px] -bottom-[5px]'
					/>
				</div>

				<p className='w-full font-light'>{item.text}</p>
			</div>
		));

	return (
		<div className='donation'>
			<section className='donation__showcase min-h-[380px] bg-red-50 relative amt-content-aligned-left'>
				{/* Quick Donation */}
				<div className='absolute z-30 right-0 -bottom-[15%] lg:block hidden'>
					<QuickDonation onlyInputAmount />
				</div>

				<div className='absolute flex flex-col justify-center w-full h-full gap-4 mx-auto overflow-hidden text-center text-gray-100'>
					<div className='absolute inset-0 z-10 showcase__bg__image'>
						{/* Small Screens */}
						<img
							src={showcase_img}
							alt='School boy'
							className='object-cover w-full h-full lg:hidden'
						/>
						{/* Large Screens */}
						<img
							src={showcase_image_lg}
							alt='School boy'
							className='hidden object-cover w-full h-full lg:block'
						/>
					</div>
				</div>

				{/* Showcase Content */}
				<div className='absolute z-20 flex items-center w-full h-full amt-content-padded-right showcase__content bg-gradient-to-t from-secondary-700/70 to-transparent'>
					<div className='flex flex-col items-center justify-center mx-auto text-center text-white lg:mx-0 lg:items-start lg:text-left'>
						<h1 className='px-4 mx-auto mb-2 text-4xl font-bold tracking-wider lg:px-0 lg:text-5xl lg:mx-0 sm:max-w-xl'>
							General Donations
						</h1>

						<p className='max-w-sm px-2 mx-auto text-lg font-light lg:leading-relaxed lg:px-0 lg:font-normal sm:max-w-md lg:mx-0 lg:pt-4 lg:max-w-sm xl:max-w-md'>
							General donations are used for organizational upkeep. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Aperiam animi qui
							laudantium fugiat at rem facere maiores atque{' '}
						</p>
					</div>
				</div>
			</section>
			{/* Fast donation for mobile */}
			<section className='mt-10 mb-10 lg:hidden'>
				<QuickDonation onlyInputAmount />
			</section>

			<section className='mt-6 lg:mt-16 xl:mt-24'>
				<ContainerLayout className='px-2 mx-auto'>
					<h1 className='section-header xl:text-center'>Causes</h1>

					<p className='py-2 text-center lg:text-left xl:text-center'>
						Donate for a causes
					</p>

					<div className='grid gap-6 mt-10 lg:grid-cols-3 lg:gap-8 xl:gap-10'>
						{causes.map((cause, index) => (
							<div key={index} className='px-8 py-10 pb-12 bg-secondary-700/10'>
								<h2 className='heading-2 lg:!text-center'>{cause.title}</h2>

								<p className='pt-4 text-center'>{cause.description}</p>

								<Button
									url='/donation'
									type='nextLink'
									textContent='Join This Cause'
									bgClassName='bg-primary-500 hover:bg-primary-600'
									className='text-gray-100 mt-8 !w-fit mx-auto'
								/>
							</div>
						))}
					</div>
				</ContainerLayout>
			</section>

			<section className='mt-16 lg:mt-24'>
				<ContainerLayout className='mx-auto'>
					<h1 className='section-header lg:!text-center'>Project Support</h1>

					<p className='max-w-xs py-2 mx-auto text-center sm:max-w-md'>
						Donate with intent. Support our current project
					</p>

					<div className='mt-10 current-project lg:grid lg:grid-cols-[1fr,430px] lg:gap-6 max-w-5xl mx-auto lg:h-full'>
						{/* Project Image & Progress */}
						<div className='lg:space-y-6'>
							<img
								src={showcase_img}
								alt={'current project'}
								className='w-full h-[320px] object-cover sm:h-[400px] lg:h-[330px]'
							/>

							<div className='px-6 py-6 bg-secondary-700/10 lg:h-[170px]'>
								<h2 className='heading-2 !text-left mb-2 lg:hidden'>
									Project Title
								</h2>

								{/* Progress */}
								<div className='flex items-center justify-between'>
									<h2 className='heading-2 !text-left !font-mulish !text-lg !font-normal !text-gray-700'>
										Progress
									</h2>
									<div className='font-normal text-gray-700 lg:text-lg'>
										44/100
									</div>
								</div>

								{/* Progress Bar */}
								<div className='block my-4 project__progress'>
									<div className='project__progress-bar h-[14px] bg-primary-500/50'>
										<div
											className={`h-full bg-primary-500 w-[90%]
                  `}
										></div>
									</div>
								</div>

								<Button
									type='button'
									textContent='Donate Now'
									bgClassName='bg-secondary-700 hover:bg-secondary-700'
									className='text-gray-100 !w-fit'
								/>
							</div>
						</div>

						{/* Project Description */}
						<div className='p-6 pb-8 bg-primary-500/10'>
							<h2 className='heading-2 !text-left mb-2 hidden lg:block'>
								Project Title
							</h2>

							<p className='line-clamp-7'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
								animi qui laudantium fugiat at rem facere maiores atque fugit
								aut placeat, molestias consequatur aspernatur tempore totam
								magni eligendi incidunt sit. Iusto illum magnam quas cumque esse
								molestias ratione voluptatibus repellendus!
							</p>

							<h2 className='heading-2 !text-left pt-2 !text-secondary-700'>
								Objectives
							</h2>

							{/* // ! max of 3 objectives */}
							<ul className='pt-4 pl-4 space-y-2 list-disc marker:text-secondary-500'>
								{/*  */}
								<li className='line-clamp-2'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ullam, officia.
								</li>
								<li className='line-clamp-2'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ullam, officia.
								</li>
								<li className='line-clamp-2'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ullam, officia.
								</li>
							</ul>

							<Button
								url='#/link'
								type='nextLink'
								textContent='Learn More'
								bgClassName='!bg-transparent'
								className='mt-4 !p-0 w-fit !text-sm text-secondary-500'
							>
								<CgArrowLongRight className='w-7 h-7' />
							</Button>
						</div>
					</div>
				</ContainerLayout>
			</section>

			<section className='mt-16 lg:mt-24'>
				<ContainerLayout className='mx-auto'>
					<h1 className='section-header lg:!text-center'>
						Value for Your Donation
					</h1>

					<p className='max-w-xs py-2 mx-auto text-center sm:max-w-md'>
						Our transparency speaks for us.
					</p>

					{/* Impact */}
					<div className='grid gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4'>
						{renderItems(values)}
					</div>
				</ContainerLayout>
			</section>
		</div>
	);
};

export default Donation;
