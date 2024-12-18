'use client'

import { cn } from '@/lib/utils'
import { Plus } from './svgs'
import { useState } from 'react'

type Props = {
	text: string
	description: string
	className?: string
}

export const Accordion: React.FC<Props> = ({ text, description, className }) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div
			className={cn(
				'w-full rounded-[14px] bg-gray-primary/5 py-[24px] px-[30px] text-2xl text-gray-dark font-medium flex flex-col justify-between items-center cursor-pointer overflow-hidden',
				className
			)}
			onClick={() => {
				setIsOpened(!isOpened)
			}}
		>
			<div className='flex justify-between items-center w-full'>
				{text}
				<Plus className={cn(isOpened && 'rotate-[135deg] fill-[#EB5757]')} />
			</div>
			<div
				className={cn(
					'duration-200 h-0 invisible opacity-0 text-gray-primary text-xl',
					isOpened && 'h-auto visible opacity-100 py-[18px]'
				)}
			>
				{description}
			</div>
		</div>
	)
}
