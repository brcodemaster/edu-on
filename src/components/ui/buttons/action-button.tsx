import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	title: string
	subTitle?: string
	icon: string
	alt: string
	link: string
	disabled?: boolean
}

export const ActionButton: React.FC<Props> = ({ title, subTitle, icon, alt, link, disabled }) => {
	return (
		<Link
			href={link}
			className={cn(
				'w-[190px] h-[131px] border-[2px] border-gray-secondary rounded-3xl px-[50px] py-[18px] flex flex-col justify-center items-center hover:bg-blue-secondary/50 duration-300',
				disabled && 'grayscale'
			)}
		>
			<div className='rounded-[14px] bg-blue-secondary p-4 w-[62px] h-[54px] flex justify-center items-center'>
				<Image src={icon} alt={alt} width={25} height={25} />
			</div>
			<p className='font-medium text-black pt-[18px] whitespace-nowrap'>{title}</p>
			{subTitle && (
				<p className='font-medium text-gray-dark text-sm -pt-1 whitespace-nowrap'>{subTitle}</p>
			)}
		</Link>
	)
}
