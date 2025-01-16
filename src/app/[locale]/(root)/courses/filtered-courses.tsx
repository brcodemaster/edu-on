'use client'

import { Categories, CourseBlock, Filter, Pagination, SkeletonCourse } from '@/components/ui'
import { Api } from '@/services/api-client'
import { CourseWithTag } from '@/services/filtered-course'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const FilteredCourses: React.FC = () => {
	const t = useTranslations()

	const [category, setCategory] = useState('all')
	const [courses, setCourses] = useState<CourseWithTag[]>([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	const handleChangeCategory = (category: string) => {
		setCategory(category)
	}

	const handleChangePage = (page: number) => {
		setCurrentPage(page)
	}

	const handleCourses = (courses: CourseWithTag[]) => {
		setCourses(courses)
	}

	useEffect(() => {
		Api.filteredCourse
			.search(category)
			.then(data => setCourses(data))
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
	}, [category])

	return (
		<>
			<Filter handleCourses={handleCourses} />
			<div className='overflow-hidden w-full h-full'>
				<Categories handleChangeCategory={handleChangeCategory} />
				<div className='py-9 grid grid-cols-3 gap-y-9 max-desktop:grid-cols-2 max-mobile:grid-cols-1 max-tablet:pl-14 max-tablet:py-6 max-mobile:pl-7'>
					{loading && Array.from({ length: 9 }, (_, ind) => <SkeletonCourse key={ind} />)}
					{!loading && courses.length === 0 && (
						<div className='w-full flex items-center justify-center text-3xl font-bold col-start-1 col-end-4 min-h-[800px]'>
							{t('notFound')}
						</div>
					)}
					{courses.length > 0 &&
						courses.map(newCourse => (
							<CourseBlock
								id={newCourse.id}
								key={newCourse.title}
								imgUrl={newCourse.imgUrl}
								alt={newCourse.alt}
								title={newCourse.title}
								ratingCount={newCourse.ratingCount}
								price={newCourse.currentPrice}
								discountPrice={newCourse.discountPrice}
								rating={newCourse.rating}
								views={newCourse.courseParam.views}
							/>
						))}
				</div>
				<Pagination handleChangePage={handleChangePage} page={currentPage} />
			</div>
		</>
	)
}
