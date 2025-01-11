'use client'

import { CourseBlock, SkeletonCourse } from '@/components/ui'
import { Api } from '@/services/api-client'
import { CourseWithRelations } from '@/types/types'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	const [newCourses, setNewCourses] = useState<CourseWithRelations[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		Api.courses
			.search()
			.then(data => setNewCourses(data))
			.catch(error => setError(error))
			.finally(() => setLoading(false))
	}, [])

	if (!error) {
		console.log('Ошибка при поиске новых курсов: ' + error)

		return (
			<div className='bg-red-500 text-white font-medium w-[200px] h-auto text-center'>Error</div>
		)
	}

	return (
		<Swiper
			className='w-full h-full px-5'
			loop={false}
			spaceBetween={30}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-2', prevEl: '.swiper-button-prev-2' }}
		>
			{loading &&
				Array.from({ length: 4 }, (_, ind) => (
					<SwiperSlide key={ind} className='w-[253px] mr-[30px]'>
						<SkeletonCourse />
					</SwiperSlide>
				))}

			{newCourses &&
				newCourses.map(newCourse => (
					<SwiperSlide key={newCourse.title} className='w-[253px]'>
						<CourseBlock
							id={newCourse.id}
							imgUrl={newCourse.imgUrl}
							alt={newCourse.alt}
							title={newCourse.title}
							ratingCount={newCourse.ratingCount}
							price={newCourse.currentPrice}
							discountPrice={newCourse.discountPrice}
							rating={newCourse.rating}
							views={newCourse.courseParam.views}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
