'use client'

import { newCourses } from '@/components/constants'
import { Categories, CourseBlock, Pagination, SkeletonCourse } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { Api } from '@/services/api-client'
import { CourseWithTag } from '@/services/filtered-course'
import { Course } from '@prisma/client'
import { useEffect, useState } from 'react'

export const FilteredCourses: React.FC = () => {
	const [category, setCategory] = useState('')
	const [courses, setCourses] = useState<CourseWithTag[]>([])

	const handleChangeCategory = (category: string) => {
		setCategory(category)
	}

	useEffect(() => {
		Api.filteredCourse
			.search(category)
			.then(data => setCourses(data))
			.catch(err => console.log(err))
	}, [category])

	console.log(courses)

	return (
		<div className='overflow-hidden w-full h-full'>
			<Categories handleChangeCategory={handleChangeCategory} />
			<div className='py-9 grid grid-cols-3 gap-y-9 max-desktop:grid-cols-2 max-mobile:grid-cols-1 max-tablet:pl-14 max-tablet:py-6 max-mobile:pl-7'>
				{courses.length === 0 &&
					Array.from({ length: 9 }, (_, ind) => <SkeletonCourse key={ind} />)}
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
			<Pagination />
		</div>
	)
}
