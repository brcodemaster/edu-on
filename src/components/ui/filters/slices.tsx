'use client'

import db from '../../../../db/db.json'
import { useTranslations } from 'next-intl'
import { FilterCheckbox } from '../inputs/filter-checkbox'
import { FiltersProps } from './filter'
import { useState } from 'react'
import { ArrowToBottom } from '../arrows'
import { cn } from '@/lib/utils'

type Props = {
	defaults: FiltersProps
	onChange: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
}

export const Slices: React.FC<Props> = ({ onChange, defaults }) => {
	const [show, setShow] = useState(false)

	const t = useTranslations('slicesBlock')

	const filters = db.filters

	return (
		<div
			className={cn(
				'pt-3 mt-1 border-t-[2px] border-gray-secondary px-2 h-12 overflow-hidden duration-300',
				show && 'pt-6 h-[250px]'
			)}
		>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={() => setShow(!show)}
			>
				<span className='text-gray-primary font-medium'>{t('slices')}</span>
				<ArrowToBottom
					className={cn(
						'border border-gray-secondary p-1 rounded-full duration-300',
						show && 'rotate-180'
					)}
				/>
			</div>
			<div className='py-2'>
				{filters &&
					filters.slices.map(slice => (
						<FilterCheckbox
							key={slice.direction}
							value={slice.direction}
							label={t(slice.direction)}
							onCheckboxChange={onChange}
							filterType='slices'
							defaultChecked={defaults.slices.includes(slice.direction)}
						/>
					))}
			</div>
		</div>
	)
}
