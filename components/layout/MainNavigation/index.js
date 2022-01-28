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
			<ContainerLayout className='h-full mx-auto flex items-center gap-4 lg:justify-between header__wrapper'>
				<div className='flex items-center space-x-4 header__logo'>
					<div className='w-12 h-12 bg-secondary-100'></div>
					<h1 className='text-3xl font-bold tracking-wider uppercase text-secondary-700'>
						Moces
					</h1>
				</div>

				{/* Mobile Side Menu Toggler */}
				<Button
					type='button'
					onClick={(e) => toggleMobileMenu(e)}
					className={`flex items-center justify-center transition duration-200 ml-auto border rounded-full sm:opacity-90 sm:fixed lg:hidden sm:bottom-[5%] sm:right-[5%] w-28 h-11 ${
						isMenuShown
							? '!bg-primary-50 text-primary-700 border-primary-200'
							: 'text-secondary-700 border-secondary-200 !bg-secondary-50'
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
				<div className='hidden header__nav lg:block h-full'>
					<ul className='flex items-center space-x-4 font-bold text-sm h-full uppercase'>
						{renderNavLinks(navLinks)}
					</ul>
				</div>

				{/* Donation Button */}
				<Button
					url='#/donate'
					type='nextLink'
					textContent='Donate'
					bgClassName='bg-primary-500'
					className='hidden text-gray-100 sm:block sm:ml-auto lg:ml-0'
				/>
			</ContainerLayout>
		</header>
	);
};

export default MainNavigation;
