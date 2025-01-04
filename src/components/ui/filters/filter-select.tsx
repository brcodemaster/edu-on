'use client'

import React, { useState } from 'react'
import { ArrowToBottom } from '../arrows'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { FiltersProps } from './filter'

type Props = {
	filterSelects: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
}

export const FilterSelect: React.FC<Props> = ({ filterSelects }) => {
	const [isOpened, setIsOpened] = useState(false)
	const t = useTranslations('select')
	const searchParams = useSearchParams()

	const [value, setValue] = useState<'news' | 'olds' | 'all'>(
		searchParams.get('sortBy') ? (searchParams.get('sortBy') as 'news' | 'olds' | 'all') : 'all'
	)

	const updateValue = (value: 'news' | 'olds' | 'all') => {
		setValue(value)
		setIsOpened(false)
		filterSelects(value, 'sortBy', 'add')
	}

	return (
		<div className='relative select-none w-full'>
			<div
				className='w-[254px] h-[46px] rounded-xl border border-gray-secondary p-[15px] flex justify-between items-center cursor-pointer max-tablet:w-full'
				onClick={() => {
					setIsOpened(!isOpened)
				}}
			>
				{t(value)}
				<ArrowToBottom
					className={cn(
						'border border-gray-secondary p-1 rounded-full duration-300',
						isOpened && 'rotate-180'
					)}
				/>
			</div>
			<div
				className={cn(
					'w-[254px] rounded-xl h-0 duration-200 opacity-0 absolute top-12 left-0 bg-white overflow-hidden z-[5] max-tablet:w-full',
					isOpened && 'visible h-[168px] opacity-100'
				)}
			>
				<div
					className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'
					onClick={() => {
						updateValue('news')
					}}
				>
					{t('news')}
				</div>
				<div
					className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'
					onClick={() => {
						updateValue('olds')
					}}
				>
					{t('olds')}
				</div>
				<div
					className='hover:bg-blue-secondary p-4 rounded-xl cursor-pointer'
					onClick={() => {
						updateValue('all')
					}}
				>
					{t('all')}
				</div>
			</div>
		</div>
	)
}
