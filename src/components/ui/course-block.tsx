import Image from 'next/image'
import { BookMark, Star, View } from './svgs'
import { Button } from './buttons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Course, Course_Param, Speaker } from '@prisma/client'

type Props = {
	id: number
	imgUrl: string
	alt: string
	title: string
	rating: number
	ratingCount: number
	views: number
	price: number
	discountPrice: number
	className?: string
}

export const CourseBlock: React.FC<Props> = ({
	id,
	imgUrl,
	alt,
	title,
	rating,
	ratingCount,
	views,
	price,
	discountPrice,
}) => {
	const t = useTranslations('coursesTitle')

	return (
		<div className='w-[253px] h-[321px] select-none'>
			<Link href={`/courses/${id}`}>
				<div className='w-[252px] h-[168px] rounded-2xl'>
					<Image
						className='w-full h-full object-cover z-10'
						src={imgUrl}
						alt={alt}
						width={252}
						height={168}
						priority
					/>
				</div>
				<div className='flex justify-between gap-3 items-start pt-[18px] h-[56px] w-full relative pr-6'>
					<p className=' text-gray-dark text-balance'>{t(title)}</p>
					<BookMark />
				</div>
				<div className='flex justify-between items-center w-4/5 pt-4'>
					<div className='flex items-center gap-2'>
						<Star width={16} height={15} />
						<span className='flex justify-center items-center'>
							<p className='text-blue-primary'>
								{new Intl.NumberFormat('en-US', { minimumFractionDigits: 1 }).format(rating)}
							</p>
							<p className='text-blue-primary/50 pl-1'>
								({new Intl.NumberFormat('ru-Ru').format(ratingCount)})
							</p>
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<View />
						<span>
							<p className='text-blue-primary'>{new Intl.NumberFormat('ru-Ru').format(views)}</p>
						</span>
					</div>
				</div>
			</Link>
			<div className='flex justify-between items-center gap-2 pt-3 border-t-[1px] border-gray-secondary mt-4'>
				<div>
					{discountPrice > 0 && (
						<div className='text-sm text-blue-primary line-through font-medium'>
							{new Intl.NumberFormat('ru-Ru').format(discountPrice)} so&apos;m
						</div>
					)}
					{price > 0 ? (
						<div className='font-medium text-gray-dark'>
							{new Intl.NumberFormat('ru-Ru').format(price)}{' '}
							<span className='text-gray-primary'>so&apos;m</span>
						</div>
					) : (
						<Button variant='primary' className='py-[12px] h-[43px] leading-[0]'>
							{t('free')}
						</Button>
					)}
				</div>
				<Button
					variant='grayscale'
					className='h-[43px] font-medium text-[16px] leading-[0] whitespace-nowrap'
				>
					{t('purchase')}
				</Button>
			</div>
		</div>
	)
}
