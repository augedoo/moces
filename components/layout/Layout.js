import { useState } from 'react';
import { useRouter } from 'next/router';

import MainNavigation from '@/components/layout/MainNavigation';
import MobileNavMenu from '@/components/layout/MainNavigation/MobileNavMenu';
import MainFooter from '@/components/layout/MainFooter';

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
		text: 'Projects',
		route: '/projects',
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

const Layout = ({ children }) => {
	const [isMenuShown, setMenuShown] = useState(false);

	const { pathname } = useRouter();

	// Open/Close the mobile navigation
	const toggleMobileMenu = (e) => {
		setMenuShown((prevState) => !prevState);
		e.stopPropagation();
	};

	return (
		<div className='display'>
			<MobileNavMenu
				isMenuShown={isMenuShown}
				toggleMobileMenu={toggleMobileMenu}
				navLinks={navLinks}
			/>

			<div
				className={` fixed inset-x-0 top-0 z-[999] duration-700 ${
					isMenuShown ? '-translate-x-[280px]' : 'translate-x-0'
				}`}
			>
				<MainNavigation
					isMenuShown={isMenuShown}
					toggleMobileMenu={toggleMobileMenu}
					navLinks={navLinks}
				/>
			</div>

			<div
				className={`relative z-[998] pt-[95px] duration-700 ${
					isMenuShown ? '-translate-x-[280px]' : 'translate-x-0'
				}`}
			>
				{children}

				<MainFooter
					navLinks={navLinks}
					showTop={pathname == '/contact' ? false : true}
				/>
			</div>
		</div>
	);
};

export default Layout;
