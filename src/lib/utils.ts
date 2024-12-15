import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

SwiperCore.use([Navigation, Pagination])

export const defaultSwiperSettings = {
	className: 'w-full h-full px-4 pt-[100px] flex flex-col items-center justify-center',
	loop: false,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
		1150: {
			slidesPerView: 3,
		},
	},
}
