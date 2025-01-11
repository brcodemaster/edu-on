'use client'

import { CourseBlock, SkeletonCourse } from '@/components/ui'
import { Api } from '@/services/api-client'
import { CourseWithRelations } from '@/types/types'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	const [topCourses, setTopCourses] = useState<CourseWithRelations[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		Api.courses
			.search()
			.then(data => setTopCourses(data))
			.catch(error => setError(error))
			.finally(() => setLoading(false))
	}, [])

	if (!error) {
		console.log('Ошибка при поиске топовых курсов: ' + error)

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
			navigation={{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }}
		>
			{loading &&
				Array.from({ length: 4 }, (_, ind) => (
					<SwiperSlide key={ind} className='w-[253px] mr-[30px]'>
						<SkeletonCourse />
					</SwiperSlide>
				))}
			{topCourses &&
				topCourses.map(topCourse => (
					<SwiperSlide key={topCourse.id} className='w-[253px]'>
						<CourseBlock
							id={topCourse.id}
							imgUrl={topCourse.imgUrl}
							alt={topCourse.alt}
							title={topCourse.title}
							ratingCount={topCourse.ratingCount}
							price={topCourse.currentPrice}
							discountPrice={topCourse.discountPrice}
							rating={topCourse.rating}
							views={topCourse.courseParam.views}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
