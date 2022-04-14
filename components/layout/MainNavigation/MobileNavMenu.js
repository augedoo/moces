import Link from 'next/link';
import { useRouter } from 'next/router';

import facebook from '@/assets/images/facebook-logo.png';
import linkedin from '@/assets/images/linkedin.png';
import twitter from '@/assets/images/twitter.png';
import youtube from '@/assets/images/youtube.png';
import Button from '@/components/ui/Button';

const MobileNavMenu = ({ navLinks, isMenuShown, toggleMobileMenu }) => {
	const router = useRouter();

	const renderNavLinks = (links) =>
		links.map((link, index) => (
			<li
				className={`relative w-full py-6 transition duration-300 uppercase ${
					router.pathname === link.route
						? 'mobile-menu__nav__item--active'
						: 'mobile-menu__nav__item--inactive'
				}`}
				key={index}
			>
				<Link href={`#${link.route}`}>
					<a className=''>{link.text}</a>
				</Link>
			</li>
		));

	return (
		<div
			className={`mobile-menu overflow-y-auto overflow-x-hidden fixed right-0 inset-y-0 z-[100] w-[280px] bg-secondary-700 border-l-4 border-primary-500 h-screen transform transition duration-700 ${
				isMenuShown ? 'translate-x-[0px]' : 'translate-x-[280px]'
			}`}
		>
			<div className='w-full p-4 mobile-menu__wrapper'>
				<div className='flex items-center pt-2 pb-5 space-x-4 header__logo'>
					<div className='w-12 h-12 bg-secondary-800/30'></div>
					<h1 className='text-3xl font-bold tracking-wider text-gray-200 uppercase'>
						Moces
					</h1>
				</div>

				<ul className='w-full mobile-menu__nav'>{renderNavLinks(navLinks)}</ul>

				<Button
					url='#/donate'
					type='nextLink'
					textContent='Donate'
					bgClassName='bg-primary-500'
					className='mt-10 text-gray-100 sm:hidden'
				/>

				<ul className='flex items-center mt-10 space-x-4 mobile-menu__sm'>
					<li className='flex items-center justify-center w-10 h-10 bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={facebook} alt='facebook' className='w-5 h-5' />
						</a>
					</li>
					<li className='flex items-center justify-center w-10 h-10 bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={twitter} alt='twitter' className='w-5 h-5' />
						</a>
					</li>
					<li className='flex items-center justify-center w-10 h-10 bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={linkedin} alt='linkedin' className='w-5 h-5' />
						</a>
					</li>
					<li className='flex items-center justify-center w-10 h-10 bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={youtube} alt='youtube' className='w-5 h-5' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNavMenu;
