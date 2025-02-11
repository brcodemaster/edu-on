import { Star, View } from '@/components/ui'
import { useTranslations } from 'next-intl'

type Props = {
	authorName: string
	authorLastName: string
	rating: number
	ratingCount: number
	views: number
}

export const ParamsOfCourse: React.FC<Props> = ({
	authorName,
	authorLastName,
	rating,
	ratingCount,
	views,
}) => {
	const t = useTranslations('coursesTitle')

	const firstLetterOfLastName = authorLastName.split('').slice(0, 1)

	return (
		<div className='pt-14 font-medium text-blue-primary flex items-center justify-between text-2xl max-w-[646px] border-b border-b-border pb-9 max-mobile:gap-3 max-mobile:text-base max-mobile:pt-3 max-mobile:pb-5'>
			<span className='text-black'>
				{t('author')}:{' '}
				<span>
					{authorName} {firstLetterOfLastName}.
				</span>
			</span>
			<span className='flex items-center gap-1'>
				<Star /> {new Intl.NumberFormat('en-US', { minimumFractionDigits: 1 }).format(rating)}{' '}
				<span className='opacity-50'>({new Intl.NumberFormat('ru-Ru').format(ratingCount)})</span>
			</span>
			<span className='flex items-center gap-1'>
				<View /> {new Intl.NumberFormat('ru-Ru').format(views)}
			</span>
		</div>
	)
}
