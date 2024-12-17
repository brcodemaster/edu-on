'use client'

import React, { useState } from 'react'
import { ArrowToBottom } from '../arrows'
import { cn } from '@/lib/utils'

export const FilterSelect: React.FC = () => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className='relative select-none'>
			<div
				className='w-[254px] h-[46px] rounded-xl border border-gray-secondary p-[15px] flex justify-between items-center cursor-pointer'
				onClick={() => {
					setIsOpened(!isOpened)
					console.log(isOpened)
				}}
			>
				Yangi qo&apos;shilganlar
				<ArrowToBottom
					className={cn(
						'border border-gray-secondary p-1 rounded-full duration-300',
						isOpened && 'rotate-180'
					)}
				/>
			</div>
			<div
				className={cn(
					'w-[254px] rounded-xl h-0 duration-200 opacity-0 absolute top-12 left-0 bg-white overflow-hidden z-[5]',
					isOpened && 'visible h-[168px] opacity-100'
				)}
			>
				<div className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'>
					Yangi qo&apos;shilganlar
				</div>
				<div className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'>Eng eskilari</div>
				<div className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'>Barchasi</div>
			</div>
		</div>
	)
}
