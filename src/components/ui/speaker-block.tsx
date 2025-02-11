import Image from 'next/image'
import { Star } from './svgs'
import { Button } from './buttons'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

type Props = {
	name: string
	lastName: string
	specialist: string
	imgUrl: string
	alt: string
	company: string
	rating: number
	ratingCount: number
	className?: string
}

export const SpeakerBlock: React.FC<Props> = ({
	name,
	lastName,
	specialist,
	imgUrl,
	alt,
	company,
	rating,
	ratingCount,
	className,
}) => {
	const t = useTranslations()

	const firstLetterOfLastName = lastName.split('').slice(0, 1)

	return (
		<div
			className={cn(
				'w-[192px] h-[269px] border border-gray- rounded-[30px] flex flex-col items-center justify-between p-[18px]',
				className
			)}
		>
			<div className='w-[60px] h-[60px] rounded-2xl'>
				<Image
					src={imgUrl}
					alt={alt}
					width={60}
					height={60}
					className='w-[60px] h-[60px] object-cover'
				/>
			</div>
			<div className='w-full flex flex-col items-center'>
				<p className='text-black font-medium text-[20px]'>
					{name} {firstLetterOfLastName}.
				</p>
				<p className='text-gray-primary font-medium text-sm'>{specialist}</p>
				<p className='text-gray-primary font-medium text-sm'>{company}</p>
			</div>
			<div className='flex gap-2 items-center text-blue-primary font-medium'>
				<Star /> {new Intl.NumberFormat('en-US', { minimumFractionDigits: 1 }).format(rating)}{' '}
				<p className='text-blue-primary/50'>
					({new Intl.NumberFormat('ru-Ru').format(ratingCount)})
				</p>
			</div>
			<Button variant={'grayscale'} className='w-full h-[37px] leading-[0] font-medium'>
				{t('profile')}
			</Button>
		</div>
	)
}
