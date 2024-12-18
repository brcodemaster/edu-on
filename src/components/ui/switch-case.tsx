'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
	leftSide: string
	rightSide: string
}

export const SwitchCase: React.FC<Props> = ({ leftSide, rightSide }) => {
	const [switched, isSwitched] = useState(false)

	return (
		<div className='text-gray-primary font-medium flex justify-center items-center gap-9 whitespace-nowrap pt-[124px] text-[24px] max-mobile:flex-col max-tablet:pt-[80px]'>
			<div className={cn(switched && 'text-blue-primary duration-300')}>{leftSide}</div>
			<div
				className='w-[54px] h-[24px] bg-blue-primary rounded-full cursor-pointer relative'
				onClick={() => {
					isSwitched(!switched)
				}}
			>
				<span
					className={cn(
						'w-[18px] aspect-square bg-white rounded-full absolute top-[3px] duration-300 ease-in-out',
						switched ? ' left-[3px] ' : 'left-[33px]'
					)}
				></span>
			</div>
			<div className={cn(!switched && 'text-blue-primary duration-300')}>{rightSide}</div>
		</div>
	)
}
