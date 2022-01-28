import Link from 'next/link';

const Button = (props) => {
	const {
		type,
		textContent,
		className,
		bgClassName,
		gradient,
		url,
		disabled,
		children,
		...rest
	} = props;

	if (type === 'button') {
		return (
			<button
				className={`outline-none whitespace-nowrap text-base uppercase py-3 flex gap-2 items-center justify-center px-6 font-semibold transition duration-500 ${className} ${
					gradient
						? 'bg-gradient-to-tr from-[#1FA2FF] to-[#12D8FA] hover:bg-gradient-to-tl text-white'
						: bgClassName
				} ${disabled && 'opacity-50 pointer-events-none cursor-not-allowed'}`}
				{...rest}
			>
				{textContent}
				{children}
			</button>
		);
	}

	if (type === 'submit') {
		return (
			<button
				type='submit'
				className={`outline-none whitespace-nowrap text-base uppercase py-3 flex gap-2 items-center justify-center px-6 font-semibold transition duration-500 ${className} ${
					gradient
						? 'bg-gradient-to-tr from-[#1FA2FF] to-[#12D8FA] hover:bg-gradient-to-tl text-white'
						: bgClassName
				} ${disabled && 'opacity-50 pointer-events-none cursor-not-allowed'}`}
				{...rest}
			>
				{textContent}
				{children}
			</button>
		);
	}

	if (type === 'link') {
		return (
			<a
				href={url}
				className={`outline-none whitespace-nowrap text-base uppercase py-3 flex gap-2 items-center justify-center px-6 font-semibold transition duration-500 ${className} ${
					gradient
						? 'bg-gradient-to-tr from-[#1FA2FF] to-[#12D8FA] hover:bg-gradient-to-tl text-white'
						: bgClassName
				} ${disabled && 'opacity-50 pointer-events-none cursor-not-allowed'}`}
				{...rest}
			>
				{textContent}
				{children}
			</a>
		);
	}

	if (type === 'nextLink') {
		return (
			<Link href={url}>
				<a
					className={`outline-none whitespace-nowrap text-base uppercase py-3 flex gap-2 items-center justify-center px-6 font-semibold transition duration-500 ${className} ${
						gradient
							? 'bg-gradient-to-tr from-[#1FA2FF] to-[#12D8FA] hover:bg-gradient-to-tl text-white'
							: bgClassName
					} ${disabled && 'opacity-50 pointer-events-none cursor-not-allowed'}`}
					{...rest}
				>
					{textContent}
					{children}
				</a>
			</Link>
		);
	}
};

Button.defaultProps = {
	bgClassName: 'bg-primary-500',
};

export default Button;
