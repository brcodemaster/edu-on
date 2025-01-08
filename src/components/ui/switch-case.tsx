'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
	leftSide: string
	rightSide: string
	className?: string
}

export const SwitchCase: React.FC<Props> = ({ leftSide, rightSide, className }) => {
	const [switched, isSwitched] = useState(false)

	return (
		<div
			className={cn(
				'text-gray-primary font-medium flex justify-center items-center gap-9 whitespace-nowrap pt-[124px] text-[24px] max-tablet:text-[23px] max-tablet:pt-[40px] max-mobile:gap-4 max-mobile:text-[18px] max-mobile:pt-[35px]',
				className
			)}
		>
			<div className={cn(switched && 'text-blue-primary duration-300')}>{leftSide}</div>
			<div
				className='w-[54px] h-[24px] bg-blue-primary flex items-center rounded-full cursor-pointer relative max-mobile:w-[48px] max-mobile:h-[20px] shadow-inner'
				onClick={() => {
					isSwitched(!switched)
				}}
			>
				<span
					className={cn(
						'w-[18px] aspect-square bg-white rounded-full absolute duration-300 ease-in-out max-mobile:w-[16px]',
						switched ? ' left-[3px] max-mobile:left-[2px]' : 'left-[33px] max-mobile:left-[30px]'
					)}
				></span>
			</div>
			<div className={cn(!switched && 'text-blue-primary duration-300')}>{rightSide}</div>
		</div>
	)
}
