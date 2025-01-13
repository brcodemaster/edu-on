'use client'

import db from '../../../../db/db.json'
import React, { useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'
import { FilterCheckbox } from '../inputs/filter-checkbox'
import { FiltersProps } from './filter'
import { cn } from '@/lib/utils'
import { ArrowToBottom } from '../arrows'
type Props = {
	onChange: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
	defaults: FiltersProps
}

export const Ratings: React.FC<Props> = ({ onChange, defaults }) => {
	useEffect(() => {
		const isOpened = localStorage.getItem('ratingIsOpen') === 'true'
		setShow(isOpened)
	}, [])

	const [show, setShow] = useState(false)

	const t = useTranslations()

	const filters = db.filters

	return (
		<div className={cn('pt-3 h-12 overflow-hidden px-2 duration-300', show && 'h-[219px] pt-6')}>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={() => {
					if (show === false) {
						setShow(true)
						localStorage.setItem('ratingIsOpen', 'true')
					} else {
						setShow(false)
						localStorage.setItem('ratingIsOpen', '')
					}
				}}
			>
				<span className='text-gray-primary font-medium w-full'>{t('rating')}</span>
				<ArrowToBottom
					className={cn(
						'border border-gray-secondary p-1 rounded-full duration-300',
						show && 'rotate-180'
					)}
				/>
			</div>
			<div className='py-2'>
				{filters &&
					filters.ratings.map(rating => (
						<FilterCheckbox
							key={rating.value}
							value={rating.value}
							label={rating.label}
							className='text-blue-primary'
							star
							rating={rating.rating}
							onCheckboxChange={onChange}
							filterType='ratings'
							defaultChecked={defaults.ratings.includes(rating.value)}
						/>
					))}
			</div>
		</div>
	)
}
