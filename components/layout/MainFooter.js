import PropTypes from 'prop-types';
import { CgArrowLongRight } from 'react-icons/cg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import Link from 'next/link';

import facebook from '@/assets/images/facebook-logo.png';
import linkedin from '@/assets/images/linkedin.png';
import twitter from '@/assets/images/twitter.png';
import youtube from '@/assets/images/youtube.png';
import footer_bg from '@/assets/images/footer_bg.jpg';

import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';
import OutlineOffset from '../ui/OutlineOffset';

const MainFooter = ({ navLinks, showTop }) => {
	return (
		<div className='mt-16 footer'>
			{/* Top Footer */}
			<div
				className={`footer__top relative w-full h-full pt-20 pb-16 ${
					showTop ? 'block' : 'hidden'
				}`}
			>
				{/* BG Image */}
				<img
					src={footer_bg}
					alt='footer background'
					className='absolute inset-0 z-10 object-cover w-full h-full footer__top__bg-img'
				/>

				{/* Overlay Bg */}
				<div className='absolute inset-0 z-20 w-full h-full footer__top__overlay bg-secondary-700/90'></div>

				{/* Top Content */}
				<ContainerLayout className='relative z-30 flex flex-col items-center justify-center gap-10 mx-auto divide-y lg:py-8 lg:gap-0 md:flex-wrap md:flex-row footer__top__content divide-gray-100/20 md:divide-none'>
					{/* Logo */}
					<div className='flex items-center space-x-4 md:justify-center header__logo md:w-full lg:hidden'>
						<div className='w-12 h-12 bg-secondary-100'></div>
						<h1 className='text-3xl font-bold tracking-wider text-white uppercase'>
							Moces
						</h1>
					</div>

					{/* About */}
					<div className='pt-8 lg:-mt-10 md:w-full lg:pt-0 lg:order-1 lg:w-1/3'>
						{/* Logo */}
						<div className='items-center hidden space-x-4 lg:justify-start lg:mb-4 md:justify-center header__logo md:w-full lg:flex'>
							<div className='w-12 h-12 bg-secondary-100'></div>
							<h1 className='text-3xl font-bold tracking-wider text-white uppercase'>
								Moces
							</h1>
						</div>

						<h3 className='text-2xl font-semibold text-center text-white lg:text-left'>
							About
						</h3>

						<p className='max-w-xs py-2 pb-4 mx-auto leading-relaxed text-center lg:text-left text-white/80 sm:max-w-md '>
							In publishing and graphic design, Lorem ipsum is a placeholder
							text commonly used to demonstrate the visual form of a document he
							visualize.
						</p>

						<Button
							url='#/about'
							type='nextLink'
							textContent='Learn More'
							bgClassName='!bg-transparent'
							className='!p-0 lg:w-fit !text-sm self-start text-gray-100'
						>
							<CgArrowLongRight className='w-7 h-7' />
						</Button>
					</div>

					{/* Call Or post */}
					<div className='pt-8 text-center md:w-full lg:order-4 lg:w-1/3 lg:text-left lg:pt-0'>
						<h3 className='text-2xl font-semibold text-white'>
							Call Us / Post
						</h3>

						<ul className='flex flex-col max-w-xs gap-2 py-2 pb-4 mx-auto leading-relaxed text-white/80 sm:max-w-md'>
							<li>
								<a href='tel:+237 11 11 11 11'>(237) 11 11 11 11</a>
							</li>
							<li>
								<a href='tel:+233 22 22 22 22'>(233) 22 22 22 22</a>
							</li>
							<li>
								<address>
									P. O. Box 56 Muyuka <br />
									South West Region <br />
									Republic of Cameroon <br />
								</address>
							</li>
						</ul>
					</div>

					{/* Locate Us */}
					<div className='pt-8 md:w-2/5 md:pt-0 lg:pt-0 lg:order-3 lg:w-1/3 lg:px-0'>
						<div className='flex flex-col items-center justify-center gap-2 lg:items-start'>
							{/* Icon */}
							<div className='w-[60px] h-[60px] min-w-[40px] lg:w-[60px] lg:min-w-[60px] lg:h-[60px] text-3xl lg:text-4xl flex items-center text-primary-500 relative justify-center bg-primary-50 border '>
								<HiOutlineLocationMarker />

								<OutlineOffset
									outlineColor={'border-white/50'}
									className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
								/>
							</div>

							<h3 className='text-2xl font-semibold text-center text-white'>
								Locate Us
							</h3>
						</div>

						<ul className='flex flex-col max-w-xs gap-2 py-2 pb-4 mx-auto leading-relaxed text-center lg:text-left text-white/80 sm:max-w-md'>
							<li>
								<address>
									Ancien palais presidentiel <br />
									BP 12 798 <br />
									Yaoundé, Cameroon <br />
								</address>
							</li>
							<li className='mt-4 lg:mt-2'>
								<address>
									FD116 Powen St <br />
									GW-0816-1909 (GPS Address) <br />
									Accra, Ghana <br />
								</address>
							</li>
						</ul>
					</div>

					{/* Stay In Touch */}
					<div className='pt-8 lg:pt-0 md:w-2/5 lg:order-2 lg:w-1/3 lg:px-10'>
						<div className='flex flex-col items-center justify-center gap-2 lg:items-start'>
							{/* Icon */}
							<div className='w-[60px] h-[60px] min-w-[40px] lg:w-[60px] lg:min-w-[60px] lg:h-[60px] text-3xl lg:text-4xl flex items-center text-primary-500 relative justify-center bg-primary-50 border '>
								<MdOutlineConnectWithoutContact className='text-primary-500' />

								<OutlineOffset
									outlineColor={'border-white/50'}
									className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
								/>
							</div>

							<h3 className='text-2xl font-semibold text-center text-white'>
								Stay In Touch
							</h3>
						</div>

						<ul className='flex items-center mt-10 space-x-4 lg:space-x-0 lg:gap-2 lg:flex-col md:justify-center md:mt-5 mobile-menu__sm lg:items-start'>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex items-center justify-center w-10 h-10 bg-secondary-800/30 '>
										<img src={facebook} alt='facebook' className='w-5 h-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Facebook
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex items-center justify-center w-10 h-10 bg-secondary-800/30 '>
										<img src={twitter} alt='twitter' className='w-5 h-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Twitter
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex items-center justify-center w-10 h-10 bg-secondary-800/30 '>
										<img src={linkedin} alt='linkedin' className='w-5 h-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										LinkedIn
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex items-center justify-center w-10 h-10 bg-secondary-800/30 '>
										<img src={youtube} alt='youtube' className='w-5 h-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Youtube
									</span>
								</a>
							</li>
						</ul>

						{/* Email Us */}
						<div className='hidden pt-8 md:block lg:hidden'>
							<h3 className='text-2xl font-semibold text-center text-white'>
								Email Us
							</h3>

							<a
								href='mailto:info@moces.com'
								className='block my-3 mb-5 text-lg text-white md:text-center'
							>
								info@moces.com
							</a>

							<Button
								url='mailto:info@moces.com'
								type='link'
								textContent='Write Mail'
								bgClassName='!bg-primary-500 !hover:bg-white'
								className='!text-sm self-start md:max-w-[150px] md:mx-auto text-gray-100'
							/>
						</div>
					</div>

					{/* Email Us */}
					<div className='pt-8 md:hidden lg:block lg:order-5 lg:w-1/3 lg:pt-0 lg:px-10'>
						<h3 className='text-2xl font-semibold text-center text-white lg:text-left'>
							Email Us
						</h3>

						<a
							href='mailto:info@moces.com'
							className='block my-3 mb-5 text-lg text-white'
						>
							info@moces.com
						</a>

						<Button
							url='mailto:info@moces.com'
							type='link'
							textContent='Write Mail'
							bgClassName='!bg-primary-500 !hover:bg-white'
							className='!text-sm self-start lg:w-[200px] hover:bg-white text-gray-100'
						/>
					</div>

					{/* Newsletter */}
					<div className='flex-col justify-center hidden max-w-md pt-8 mx-auto text-center lg:text-left item-center lg:flex lg:order-6 lg:w-1/3 lg:px-0'>
						<h3 className='text-2xl font-semibold text-white'>
							Subscribe to our newsletter
						</h3>

						<p className='max-w-xs py-3 pb-4 mx-auto leading-relaxed text-white/70 sm:max-w-md '>
							Stay updated on news about MOCES. Enter your email if you are not
							a member of MOCES.
						</p>

						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='block w-full px-2 py-3 text-base text-center text-white bg-transparent border-2 border-white outline-none hover:border-primary-500 lg:text-left'
						/>

						<Button
							type='submit'
							textContent='Subscribe'
							bgClassName='!bg-primary-500 !hover:bg-white'
							className='!text-sm self-start mx-auto lg:mx-0 mt-8  hover:bg-white  text-gray-100'
						/>
					</div>
				</ContainerLayout>
			</div>

			{/* Bottom Footer */}
			<div
				className={`footer__bottom py-8 bg-secondary-900 relative w-full h-full pb-16 lg:pb-10 lg:pt-0`}
			>
				<ContainerLayout className='mx-auto'>
					{/* Newsletter */}
					<div className='flex flex-col justify-center max-w-md pt-8 mx-auto lg:hidden item-center'>
						<h3 className='text-2xl font-semibold text-center text-white'>
							Subscribe to our newsletter
						</h3>

						<p className='max-w-xs py-3 pb-4 mx-auto leading-relaxed text-center text-white/70 sm:max-w-md '>
							Stay updated on news about MOCES. Enter your email if you are not
							a member of MOCES.
						</p>

						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='block w-full px-2 py-3 text-base text-center text-white bg-transparent border-2 border-white outline-none hover:border-primary-500'
						/>

						<Button
							type='submit'
							textContent='Subscribe'
							bgClassName='!bg-primary-500 !hover:bg-white'
							className='!text-sm self-start mx-auto mt-8 hover:bg-white text-gray-100'
						/>
					</div>

					{/* Bottom Navigation */}
					<div className='hidden border-b lg:flex border-secondary-600 border-x'>
						<ul className='flex items-center w-full h-full text-sm font-bold text-center uppercase divide-x divide-secondary-600'>
							{navLinks.map((link, index) => (
								<li key={index} className='flex-1 w-full'>
									<Link href={link.route}>
										<a className='block w-full py-4 text-secondary-400 hover:bg-secondary-600 hover:!text-white'>
											{link.text}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Copyright */}
					<div className='flex flex-col gap-10 mt-12 text-sm font-light text-center text-white lg:mt-8 lg:justify-between lg:flex-row opacity-70'>
						<p>© Copyright by MOCES 2021. All rights reserved</p>

						<p className='opacity-70'>
							Designed and built by AmoTech Solutions
						</p>
					</div>
				</ContainerLayout>
			</div>
		</div>
	);
};

MainFooter.defaultProps = {
	showTop: true,
};

MainFooter.propTypes = {
	showTop: PropTypes.bool,
};

export default MainFooter;
