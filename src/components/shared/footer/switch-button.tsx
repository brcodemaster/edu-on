'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

export const SwitchButton: React.FC = () => {
	const [active, setActive] = useState('passive')

	return (
		<div className='w-[260px] h-[63px] rounded-[18px] flex justify-center items-center text-black border-[2px] border-border mt-7 max-tablet:mt-0'>
			<span
				className={cn(
					'w-[124px] h-[51px] rounded-[12px] flex justify-center items-center font-medium duration-300 cursor-pointer select-none',
					active === 'passive' && 'bg-blue-primary text-white'
				)}
				onClick={() => {
					setActive('passive')
				}}
			>
				O&apos;quvchi
			</span>
			<span
				className={cn(
					'w-[124px] h-[51px] rounded-[12px] flex justify-center items-center font-medium duration-300 cursor-pointer select-none',
					active === 'active' && 'bg-blue-primary text-white'
				)}
				onClick={() => {
					setActive('active')
				}}
			>
				Spiker
			</span>
		</div>
	)
}