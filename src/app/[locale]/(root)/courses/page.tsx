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
import { useState } from 'react'
import { FilteredCourses } from './filtered-courses'

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
				<FilteredCourses />
			</div>
		</Section>
	)
}
