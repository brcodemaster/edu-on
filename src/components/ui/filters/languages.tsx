'use client'

import { useTranslations } from 'next-intl'
import db from '../../../../db/db.json'
import { FilterCheckbox } from '../inputs/filter-checkbox'
import { FiltersProps } from './filter'

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
	const t = useTranslations('languageBlock')

	const filters = db.filters

	return (
		<div className='pt-6 mt-6 border-t-[2px] border-gray-secondary max-tablet:border-0 max-tablet:pt-0 max-mobile:pt-6 max-mobile:border-t-2 max-mobile:border-gray-secondary'>
			<span className='text-gray-primary font-medium'>{t('language')}</span>
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
	)
}
