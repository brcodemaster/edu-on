import { cn } from '@/lib/utils'
import { Star } from '../svgs'
import { FiltersProps } from '../filters/filter'
import { Checkbox } from './checkbox'

type FilterCheckbox = {
	value: string
	label: string
	rating?: string
	filterType?: keyof FiltersProps
	onCheckboxChange?: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean
	) => void
	defaultChecked?: boolean
	star?: boolean
	className?: string
}

export const FilterCheckbox: React.FC<FilterCheckbox> = ({
	value,
	label,
	filterType,
	defaultChecked,
	onCheckboxChange,
	rating,
	star,
	className,
}) => {
	return (
		<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
			<span className={cn('font-medium flex items-center gap-1', className)}>
				{star && <Star />}
				{label}
				{rating && <span className='opacity-50 font-medium'>({rating})</span>}
			</span>
			<Checkbox
				defaultChecked={defaultChecked!}
				onCheckboxChange={onCheckboxChange}
				value={value}
				filterType={filterType!}
			/>
		</label>
	)
}
