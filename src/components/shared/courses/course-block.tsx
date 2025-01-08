import { Certificate, Star, Time, Video } from '@/components/ui'
import { Button } from '@/components/ui/buttons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Props = {
	imgUrl: string
	alt: string
	price: number
	discountPrice: number
	hours: number
	videos: number
}

export const CourseBlock: React.FC<Props> = ({
	imgUrl,
	alt,
	hours,
	price,
	discountPrice,
	videos,
}) => {
	const t = useTranslations('coursesTitle')
	const tCourse = useTranslations('inCourse')

	return (
		<div className='w-[375px] shrink-0 p-5 max-mobile:p-0 max-mobile:w-[290px]'>
			<div className='w-[348px] h-[232px] max-mobile:w-[290px]'>
				<Image
					src={imgUrl}
					alt={alt}
					width={348}
					height={232}
					className='w-full h-full object-contain'
				/>
			</div>
			<div className='sticky top-[115px] w-full'>
				<span className='text-gray-primary font-medium text-2xl flex gap-1 pt-7 flex-col items-start'>
					{discountPrice > 0 && (
						<div className='text-lg text-blue-primary line-through font-medium'>
							{discountPrice} so&apos;m
						</div>
					)}
					<div className='flex items-center gap-1'>
						<p className='text-black/80'>{price}</p> so&apos;m
					</div>
				</span>
				<Button variant='secondary' className='font-medium w-full mt-6'>
					{t('purchase')}
				</Button>
				<div className='text-lg'>
					<p className='text-blue-primary font-medium pt-6'>{tCourse('inCourse')}:</p>
					<div className='grayscale'>
						<p className='flex items-center gap-2 py-3'>
							<Star width={24} height={24} />
							{tCourse('lifetime')}
						</p>
						<p className='flex items-center gap-2 py-3'>
							<Time /> {hours} {tCourse('hours')}
						</p>
						<p className='flex items-center gap-2 py-3'>
							<Video /> {videos} {tCourse('videos')}
						</p>
						<p className='flex items-center gap-2 py-3'>
							<Certificate /> {tCourse('certificate')}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
