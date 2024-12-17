'use client'

import { categories } from '../constants'
import { CategoryBrick } from './category-brick'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
	className?: string
}

export const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div className='w-full relative'>
			<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-10 h-full z-[5]' />
			<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-10 h-full z-[5]' />
			<Swiper
				className='flex items-center gap-5 w-full pl-5'
				loop={false}
				spaceBetween={0}
				slidesPerView='auto'
			>
				{categories &&
					categories.map(category => (
						<SwiperSlide key={category.title} className='w-auto'>
							<CategoryBrick title={category.title} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}
