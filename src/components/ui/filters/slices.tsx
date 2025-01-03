import db from '../../../../db/db.json'
import { useTranslations } from 'next-intl'
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

export const Slices: React.FC<Props> = ({ onChange, defaults }) => {
	const t = useTranslations('slicesBlock')

	const filters = db.filters

	return (
		<div className='pt-6 border-t-[2px] border-gray-secondary mt-6'>
			<span className='text-gray-primary font-medium'>{t('slices')}</span>
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
	)
}
