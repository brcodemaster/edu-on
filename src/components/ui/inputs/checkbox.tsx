'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FiltersProps } from '../filters/filter'

type Props = {
	value: string
	filterType: keyof FiltersProps
	defaultChecked: boolean
	onCheckboxChange?: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
}

export const Checkbox: React.FC<Props> = ({
	onCheckboxChange,
	value,
	filterType,
	defaultChecked = false,
}) => {
	const [isChecked, setIsChecked] = useState(defaultChecked)

	const handleChange = () => {
		if (isChecked === true) {
			setIsChecked(false)
			onCheckboxChange?.(value, filterType, 'delete', isChecked)
		} else {
			setIsChecked(true)
			onCheckboxChange?.(value, filterType, 'add', isChecked)
		}
	}

	return (
		<>
			<input
				id={value}
				checked={isChecked}
				type='checkbox'
				onChange={handleChange}
				className='hidden'
			/>
			<span
				className={cn(
					'w-5 h-5 rounded-md flex justify-center items-center ring-2 ring-blue-primary/50',
					isChecked && 'bg-blue-primary/50'
				)}
			>
				{isChecked && (
					<span>
						<svg
							width='10'
							height='8'
							viewBox='0 0 10 8'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.81344 7.2479C3.58944 7.2479 3.36544 7.1629 3.19444 6.9919L0.821441 4.6189C0.479441 4.2769 0.479441 3.7229 0.821441 3.3819C1.16344 3.0399 1.71644 3.0389 2.05844 3.3809L3.81344 5.1359L7.94144 1.0079C8.28344 0.665904 8.83644 0.665904 9.17844 1.0079C9.52044 1.3499 9.52044 1.9039 9.17844 2.2459L4.43244 6.9919C4.26144 7.1629 4.03744 7.2479 3.81344 7.2479Z'
								fill='#006AFF'
							/>
						</svg>
					</span>
				)}
			</span>
		</>
	)
}
