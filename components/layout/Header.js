import React from 'react';
import { Link } from 'react-scroll';

const Header = (props) => {
	const { title, description, imageSmall, imageLarge, nav } = props;

	return (
		<div className='about__header amt-content-aligned-left relative min-h-[380px] bg-red-50'>
			<div className='absolute flex flex-col justify-center w-full h-full gap-4 mx-auto overflow-hidden text-center text-gray-100'>
				<div className='absolute inset-0 z-10 header__bg__image'>
					{/* Small Screens */}
					<img
						src={imageSmall}
						alt={title}
						className='object-cover w-full h-full lg:hidden'
					/>
					{/* Large Screens */}
					<img
						src={imageLarge}
						alt={title}
						className='hidden object-cover w-full h-full lg:block'
					/>
				</div>
			</div>

			{/* Showcase Content */}
			<div className='absolute z-20 flex items-center w-full h-full amt-content-padded-right header__content bg-gradient-to-t from-secondary-700/70 to-transparent'>
				<div className='flex flex-col items-center justify-center mx-auto text-center text-white lg:mx-0 lg:items-start lg:text-left'>
					<h1 className='px-4 mx-auto mb-2 text-4xl font-bold tracking-wider sm:max-w-xl lg:mx-0 lg:px-0 lg:text-5xl'>
						{title}
					</h1>

					{description && (
						<p className='max-w-sm px-2 mx-auto text-lg font-light sm:max-w-md lg:mx-0 lg:max-w-sm lg:px-0 lg:pt-4 lg:font-normal lg:leading-relaxed xl:max-w-md'>
							General donations are used for organizational upkeep. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Aperiam animi qui
							laudantium fugiat at rem facere maiores atque{' '}
						</p>
					)}

					{nav && (
						<ul className='flex flex-col items-center gap-3 lg:items-start'>
							{nav.map((link, index) => (
								<li
									key={index}
									className='group flex items-center gap-3 before:h-[1px] before:w-5 before:bg-primary-500 before:duration-300 after:h-[1px] after:w-5 after:bg-primary-500 after:duration-300 hover:cursor-pointer hover:before:bg-white hover:after:bg-white lg:after:hidden'
								>
									<Link
										activeClass='scroll-link--active'
										className='text-white duration-300 group-hover:text-primary-500'
										to={link.sectionName}
										offset={-100}
										smooth={true}
										duration={500}
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
