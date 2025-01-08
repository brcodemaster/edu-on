import { newCourses } from '@/components/constants'
import {
	Categories,
	CourseBlock,
	Filter,
	Pagination,
	Section,
	SwitchCase,
	TitleWithDescription,
} from '@/components/ui'
import { useTranslations } from 'next-intl'

export default function Courses() {
	const t = useTranslations()

	return (
		<Section className='flex flex-col justify-center items-center pt-[136px] max-mobile:pt-5'>
			<div className='flex flex-col'>
				<TitleWithDescription
					size='xxl'
					title={t('welcome')}
					subTitle={t('searchForSince')}
					description={t('learnToday')}
				/>
				<SwitchCase
					leftSide={t('slices')}
					rightSide={t('inTeachers')}
					className='max-tablet:pt-10 max-mobile:pt-8'
				/>
			</div>
			<div className='border-t border-t-border mt-[54px] pt-[36px] w-full flex justify-between items-start gap-[54px] max-tablet:flex-col max-tablet:gap-5 max-mobile:gap-4'>
				<Filter />
				<div className='overflow-hidden w-full h-full'>
					<Categories />
					<div className='py-9 grid grid-cols-3 gap-y-9 max-desktop:grid-cols-2 max-mobile:grid-cols-1 max-tablet:pl-14 max-tablet:py-6 max-mobile:pl-7'>
						{newCourses &&
							newCourses.map(newCourse => (
								<CourseBlock
									id={String(newCourse.id)}
									key={newCourse.title}
									imgUrl={newCourse.imgUrl}
									alt={newCourse.alt}
									title={newCourse.title}
									comments={newCourse.comments}
									price={newCourse.price}
									discountPrice={newCourse.discountPrice}
									rating={newCourse.rating}
									views={newCourse.views}
								/>
							))}
					</div>
					<Pagination />
				</div>
			</div>
		</Section>
	)
}
