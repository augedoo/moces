import React from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useRouter } from 'next/router';

import Button from '@/components/ui/Button';
import ContainerLayout from '../ContainerLayout';

const MainNavigation = ({ isMenuShown, toggleMobileMenu }) => {
	const navLinks = [
		{
			text: 'Home',
			route: '/',
		},
		{
			text: 'About',
			route: '/about',
		},
		{
			text: 'Project',
			route: '/project',
		},
		{
			text: 'News',
			route: '/news',
		},
		{
			text: 'Inspiration',
			route: '/inspiration',
		},
		{
			text: 'Contact',
			route: '/contact',
		},
	];

	const router = useRouter();

	const renderNavLinks = (links) =>
		links.map((link, index) => (
			<li
				className={`h-full border-b-4 flex items-center hover:text-primary-500 transition duration-300 ${
					router.pathname === link.route
						? ' text-primary-500 border-primary-500'
						: 'text-secondary-900/80 border-transparent'
				}`}
				key={index}
			>
				<Link href={`#${link.route}`}>
					<a className='transform translate-y-1'>{link.text}</a>
				</Link>
			</li>
		));

	return (
		<header className='header shadow h-[95px]'>
			<ContainerLayout className='flex items-center h-full gap-4 mx-auto lg:justify-between header__wrapper'>
				<div className='flex items-center space-x-4 header__logo'>
					<div className='w-12 h-12 bg-secondary-100'></div>
					<h1 className='text-3xl font-bold tracking-wider uppercase text-secondary-700'>
						Moces
					</h1>
				</div>

				{/* // Todo: Fix positioning */}
				{/* Mobile Side Menu Toggler */}
				<Button
					type='button'
					onClick={(e) => toggleMobileMenu(e)}
					className={`flex items-center justify-center group transition duration-200 ml-auto border rounded-full sm:opacity-90 sm:fixed sm:z-[1000] lg:hidden sm:top-[87vh] flex-row-reverse sm:right-[0%] sm:-rotate-90 w-28 h-11 ${
						isMenuShown
							? '!bg-primary-50 text-primary-700 border-primary-200 hover:text-secondary-700 hover:border-secondary-200 hover:!bg-secondary-50'
							: 'text-secondary-700 border-secondary-200 !bg-secondary-50 hover:!bg-primary-50 hover:text-primary-700 hover:border-primary-200'
					} `}
				>
					<span
						className={`transition duration-200 ${isMenuShown && 'rotate-180'}`}
					>
						{!isMenuShown ? (
							<HiOutlineMenuAlt2 className='w-7 h-7' />
						) : (
							<CgClose className='w-7 h-7' />
						)}
					</span>
					<span className='font-bold'>Menu</span>
				</Button>

				{/* Desktop Nav Links */}
				<div className='hidden h-full header__nav lg:block'>
					<ul className='flex items-center h-full space-x-4 text-sm font-bold uppercase'>
						{renderNavLinks(navLinks)}
					</ul>
				</div>

				{/* Donation Button */}
				<Button
					url='#/donate'
					type='nextLink'
					textContent='Donate'
					bgClassName='bg-primary-500 hover:bg-primary-600'
					className='hidden text-gray-100 sm:block sm:ml-auto lg:ml-0'
				/>
			</ContainerLayout>
		</header>
	);
};

export default MainNavigation;
