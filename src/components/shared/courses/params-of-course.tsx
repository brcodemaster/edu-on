import { Star, View } from '@/components/ui'
import { useTranslations } from 'next-intl'

type Props = {
	author: string
	rating: number
	comments: number
	views: number
}

export const ParamsOfCourse: React.FC<Props> = ({ author, rating, comments, views }) => {
	const t = useTranslations('coursesTitle')

	return (
		<div className='pt-14 font-medium text-blue-primary flex items-center justify-between text-2xl max-w-[646px] border-b border-b-border pb-9 max-mobile:gap-3 max-mobile:text-base max-mobile:pt-3 max-mobile:pb-5'>
			<span className='text-black'>
				{t('author')}: <span>{author}</span>
			</span>
			<span className='flex items-center gap-1'>
				<Star width={16} height={15} /> {rating} <span className='opacity-50'>({comments})</span>
			</span>
			<span className='flex items-center gap-1'>
				<View /> {views}
			</span>
		</div>
	)
}
