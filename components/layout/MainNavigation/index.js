import React from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useRouter } from 'next/router';

import Button from '@/components/ui/Button';
import ContainerLayout from '../ContainerLayout';

const MainNavigation = ({ navLinks, isMenuShown, toggleMobileMenu }) => {
	const router = useRouter();

	const renderNavLinks = (links) =>
		links.map((link, index) => (
			<li
				className={`flex h-full items-center border-b-4 transition duration-300 hover:text-primary-500 ${
					router.pathname === link.route
						? ' border-primary-500 text-primary-500'
						: 'border-transparent text-secondary-900/80'
				}`}
				key={index}
			>
				<Link href={`${link.route}`}>
					<a className='transform translate-y-1'>{link.text}</a>
				</Link>
			</li>
		));

	return (
		<header className='header h-[95px] shadow'>
			<ContainerLayout className='flex items-center h-full gap-4 mx-auto header__wrapper lg:justify-between'>
				<Link href={'/'}>
					<a className='block'>
						<div className='flex items-center space-x-4 header__logo'>
							<div className='w-12 h-12 bg-secondary-100'></div>
							<h1 className='text-3xl font-bold tracking-wider uppercase text-secondary-700'>
								Moces
							</h1>
						</div>
					</a>
				</Link>

				{/* // Todo: Fix positioning */}
				{/* Mobile Side Menu Toggler */}
				<Button
					type='button'
					onClick={(e) => toggleMobileMenu(e)}
					className={`group ml-auto flex h-11 w-28 flex-row-reverse items-center justify-center rounded-full border transition duration-200 lg:hidden file:lg:hidden ${
						isMenuShown
							? 'border-primary-200 !bg-primary-50 text-primary-700 hover:border-secondary-200 hover:!bg-secondary-50 hover:text-secondary-700'
							: 'border-secondary-200 !bg-secondary-50 text-secondary-700 hover:border-primary-200 hover:!bg-primary-50 hover:text-primary-700'
					} `}
				>
					<span
						className={`transition duration-200 ${isMenuShown && 'rotate-180'}`}
					>
						{!isMenuShown ? (
							<HiOutlineMenuAlt2 className='h-7 w-7' />
						) : (
							<CgClose className='h-7 w-7' />
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
				{!router.pathname.includes('donation') && (
					<Button
						url='/donation'
						type='nextLink'
						textContent='Donate'
						bgClassName='bg-primary-500 hover:bg-primary-600'
						className='hidden text-gray-100 lg:ml-0 lg:block'
					/>
				)}
			</ContainerLayout>
		</header>
	);
};

export default MainNavigation;
