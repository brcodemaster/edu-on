import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type Props = {
	title: string
	subTitle?: string
	icon: string | StaticImageData
	alt: string
	link: string
	disabled?: boolean
}

export const ActionButton: React.FC<Props> = ({ title, subTitle, icon, alt, link, disabled }) => {
	if (icon instanceof Object && 'src' in icon) {
		return (
			<Link
				href={link}
				className={cn(
					'w-[190px] h-[131px] border-[1px] border-gray-secondary rounded-3xl px-[50px] py-[18px] flex flex-col justify-center items-center hover:bg-blue-secondary/30 duration-300 max-tablet:px-[40px] max-tablet:py-[16px] max-mobile:px-[30px] max-mobile:py-[11px] max-mobile:w-[165px] max-mobile:h-[120px]',
					disabled && 'grayscale'
				)}
			>
				<div className='rounded-[14px] bg-blue-secondary p-4 w-[62px] h-[54px] flex justify-center items-center max-mobile:w-[50px] max-mobile:h-[42px]'>
					<Image src={icon} alt={alt} />
				</div>
				<p className='font-medium text-black pt-[18px] whitespace-nowrap max-mobile:text-sm'>
					{title}
				</p>
				{subTitle && (
					<p className='font-medium text-gray-dark text-sm -pt-1 whitespace-nowrap'>{subTitle}</p>
				)}
			</Link>
		)
	} else {
		return (
			<Link
				href={link}
				className={cn(
					'w-[190px] h-[131px] border-[1px] border-gray-secondary rounded-3xl px-[50px] py-[18px] flex flex-col justify-center items-center hover:bg-blue-secondary/30 duration-300 max-tablet:px-[40px] max-tablet:py-[16px] max-mobile:px-[30px] max-mobile:py-[11px] max-mobile:w-[165px] max-mobile:h-[120px]',
					disabled && 'grayscale'
				)}
			>
				<div className='rounded-[14px] bg-blue-secondary p-4 w-[62px] h-[54px] flex justify-center items-center max-mobile:w-[50px] max-mobile:h-[42px]'>
					<Image src={icon} alt={alt} width={25} height={25} />
				</div>
				<p className='font-medium text-black pt-[18px] whitespace-nowrap max-mobile:text-sm'>
					{title}
				</p>
				{subTitle && (
					<p className='font-medium text-gray-dark text-sm -pt-1 whitespace-nowrap'>{subTitle}</p>
				)}
			</Link>
		)
	}
}
