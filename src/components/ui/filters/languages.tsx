'use client'

import { useTranslations } from 'next-intl'
import db from '../../../../db/db.json'
import { FilterCheckbox } from '../inputs/filter-checkbox'
import { FiltersProps } from './filter'
import { ArrowToBottom } from '../arrows'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
	defaults: FiltersProps
	onChange: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
}

export const Languages: React.FC<Props> = ({ onChange, defaults }) => {
	const [show, setShow] = useState(false)

	const t = useTranslations('languageBlock')

	const filters = db.filters

	return (
		<div
			className={cn(
				'pt-3 border-t-[2px] px-2 border-gray-secondary h-12 overflow-hidden duration-300',
				show && 'pt-6 h-[258px]'
			)}
		>
			<div
				className='flex justify-between items-center cursor-pointer'
				onClick={() => setShow(!show)}
			>
				<span className='text-gray-primary font-medium'>{t('language')}</span>
				<ArrowToBottom
					className={cn(
						'border border-gray-secondary p-1 rounded-full duration-300',
						show && 'rotate-180'
					)}
				/>
			</div>
			<div className='py-2'>
				{filters &&
					filters.languages.map(language => (
						<FilterCheckbox
							key={language.lang}
							value={language.lang}
							label={t(language.lang)}
							onCheckboxChange={onChange}
							filterType='languages'
							defaultChecked={defaults.languages.includes(language.lang)}
						/>
					))}
			</div>
		</div>
	)
}
