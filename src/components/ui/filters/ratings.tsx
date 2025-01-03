'use client'

import db from '../../../../db/db.json'
import React from 'react'

import { useTranslations } from 'next-intl'
import { FilterCheckbox } from '../inputs/filter-checkbox'
import { FiltersProps } from './filter'
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
	const t = useTranslations()

	const filters = db.filters

	return (
		<div className='pt-6'>
			<span className='text-gray-primary font-medium'>{t('rating')}</span>
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
	)
}
