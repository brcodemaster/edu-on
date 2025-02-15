'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

export const BookMark: React.FC = () => {
	const [isPressed, setIsPressed] = useState(false)

	return (
		<span
			className='cursor-pointer absolute top-5 right-0'
			onClick={e => {
				e.preventDefault()
				setIsPressed(!isPressed)
			}}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='Iconly/Light/Bookmark'>
					<g id='Bookmark'>
						<path
							id='Stroke 1'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M19.7389 6.15362C19.7389 3.40274 17.8582 2.29999 15.1504 2.29999H8.79149C6.16693 2.29999 4.20001 3.32756 4.20001 5.97016V20.694C4.20001 21.4198 4.98096 21.8769 5.61355 21.522L11.9955 17.9421L18.3223 21.516C18.9559 21.8729 19.7389 21.4158 19.7389 20.689V6.15362Z'
							stroke='#006AFF'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							className={cn('duration-300', isPressed && 'fill-blue-primary')}
						/>
						<path
							id='Stroke 3'
							d='M8.27118 9.02799H15.5895'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							className={cn('duration-300', isPressed ? 'stroke-white' : 'stroke-blue-primary')}
						/>
					</g>
				</g>
			</svg>
		</span>
	)
}
