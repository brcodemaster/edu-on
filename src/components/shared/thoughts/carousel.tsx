'use client'

import { thoughts } from '@/components/constants'
import { ThoughtBlock } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	return (
		<Swiper
			className='w-full h-full px-4 py-4'
			loop={false}
			spaceBetween={30}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-5', prevEl: '.swiper-button-prev-5' }}
		>
			{thoughts &&
				thoughts.map(thought => (
					<SwiperSlide key={thought.name} className='w-[239px]'>
						<ThoughtBlock
							imgUrl={thought.imgUrl}
							alt={thought.alt}
							name={thought.name}
							role={thought.role}
							comment={thought.comment}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
