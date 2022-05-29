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
				className={`relative w-full py-6 uppercase transition duration-300 ${
					router.pathname === link.route
						? 'mobile-menu__nav__item--active'
						: 'mobile-menu__nav__item--inactive'
				}`}
				key={index}
			>
				<Link href={`${link.route}`}>
					<a className=''>{link.text}</a>
				</Link>
			</li>
		));

	return (
		<div
			className={`mobile-menu fixed inset-y-0 right-0 z-[1000] h-screen w-[280px] transform overflow-y-auto overflow-x-hidden border-l-4 border-primary-500 bg-secondary-700 duration-700 ${
				isMenuShown ? 'translate-x-[0px]' : 'translate-x-[280px]'
			}`}
		>
			<div className='mobile-menu__wrapper w-full p-4'>
				<div className='header__logo flex items-center space-x-4 pt-2 pb-5'>
					<div className='h-12 w-12 bg-secondary-800/30'></div>
					<h1 className='text-3xl font-bold uppercase tracking-wider text-gray-200'>
						Moces
					</h1>
				</div>

				<ul className='mobile-menu__nav w-full'>{renderNavLinks(navLinks)}</ul>

				<Button
					url='/donation'
					type='nextLink'
					textContent='Donate'
					bgClassName='bg-primary-500'
					className='mt-10 text-gray-100 lg:hidden'
				/>

				<ul className='mobile-menu__sm mt-10 flex items-center space-x-4'>
					<li className='flex h-10 w-10 items-center justify-center bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={facebook} alt='facebook' className='h-5 w-5' />
						</a>
					</li>
					<li className='flex h-10 w-10 items-center justify-center bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={twitter} alt='twitter' className='h-5 w-5' />
						</a>
					</li>
					<li className='flex h-10 w-10 items-center justify-center bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={linkedin} alt='linkedin' className='h-5 w-5' />
						</a>
					</li>
					<li className='flex h-10 w-10 items-center justify-center bg-secondary-800/30'>
						<a href='#http://' target='_blank' rel='noopener noreferrer'>
							<img src={youtube} alt='youtube' className='h-5 w-5' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNavMenu;
