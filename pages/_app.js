import { useState } from 'react';
import { useRouter } from 'next/router';
import SimpleReactLightbox from 'simple-react-lightbox';

import 'swiper/css/bundle';
import '../styles/globals.scss';
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

function MyApp({ Component, pageProps }) {
	const [isMenuShown, setMenuShown] = useState(false);

	const { pathname } = useRouter();

	// Open/Close the mobile navigation
	const toggleMobileMenu = (e) => {
		setMenuShown((prevState) => !prevState);
		e.stopPropagation();
	};

	console.log(pathname);
	return (
		<SimpleReactLightbox>
			<div className='display'>
				<MobileNavMenu
					isMenuShown={isMenuShown}
					toggleMobileMenu={toggleMobileMenu}
					navLinks={navLinks}
				/>

				<div
					className={`transform transition duration-700 ${
						isMenuShown ? '-translate-x-[280px]' : 'translate-x-0'
					}`}
				>
					<MainNavigation
						isMenuShown={isMenuShown}
						toggleMobileMenu={toggleMobileMenu}
						navLinks={navLinks}
					/>

					<Component {...pageProps} />
				</div>

				<MainFooter
					navLinks={navLinks}
					showTop={pathname == '/contact' ? false : true}
				/>
			</div>
		</SimpleReactLightbox>
	);
}

export default MyApp;
