import Image from 'next/image'
import { BookMark } from './bookmark'
import { Star } from './star'
import { View } from './view'
import { Button } from './button'

type Props = {
	imgUrl: string
	alt: string
	labelImg: string
	labelAlt: string
	title: string
	rating: number
	comments: number
	views: number
	price: number | 'Bepul'
	discountPrice?: number
	className?: string
}

export const CourseBlock: React.FC<Props> = ({
	imgUrl,
	alt,
	labelImg,
	labelAlt,
	title,
	rating,
	comments,
	views,
	price,
	discountPrice,
	className,
}) => {
	return (
		<div className='w-[253px] h-[321px] select-none'>
			<div className='w-[252px] h-[168px] rounded-2xl relative'>
				<Image
					className='w-full h-full object-cover z-10'
					src={imgUrl}
					alt={alt}
					width={252}
					height={168}
				/>
				<div className='w-[66x] h-[66px] pt-3 pl-3 bg-white rounded-2xl absolute bottom-0 right-0'>
					<Image
						className='w-full h-full object-cover'
						src={labelImg}
						alt={labelAlt}
						width={54}
						height={54}
					/>
				</div>
			</div>
			<div className='flex justify-between gap-3 items-start pt-[18px] h-[56px] w-full'>
				<p className=' text-gray-dark'>{title}</p>
				<BookMark />
			</div>
			<div className='flex justify-between items-center w-4/5 pt-4'>
				<div className='flex items-center gap-2'>
					<Star />
					<span className='flex justify-center items-center'>
						<p className='text-blue-primary'>{rating}</p>
						<p className='text-blue-primary/50 pl-1'>({comments})</p>
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<View />
					<span>
						<p className='text-blue-primary'>{views}</p>
					</span>
				</div>
			</div>
			<div className='flex justify-between items-center gap-2 pt-3 border-t-[2px] border-gray-secondary mt-4'>
				<div>
					{discountPrice && (
						<div className='text-sm text-blue-primary line-through font-medium'>
							{discountPrice}
						</div>
					)}
					{typeof price === 'number' ? (
						<div className='font-medium text-gray-dark'>
							{price} <span className='text-gray-primary'>so&apos;m</span>
						</div>
					) : (
						<Button variant='primary' className='py-[12px] h-[43px] leading-[0]'>
							{price}
						</Button>
					)}
				</div>
				<Button
					variant='grayscale'
					className='h-[43px] font-medium text-[16px] leading-[0] whitespace-nowrap'
				>
					Xarid qilish
				</Button>
			</div>
		</div>
	)
}
