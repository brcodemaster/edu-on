'use client'

import { useEffect, useMemo, useState } from 'react'
import { Languages, Ratings, Slices, FilterSelect, Range } from './'
import { Button } from '../buttons'
import { useTranslations } from 'next-intl'
import qs from 'qs'
import { useRouter, useSearchParams } from 'next/navigation'
import { CourseWithTag } from '@/services/filtered-course'
import { Api } from '@/services/api-client'

export type FiltersProps = {
	sortBy?: string
	price: { priceFrom: number | null; priceTo: number | null }
	ratings: string[]
	languages: string[]
	slices: string[]
}

interface QueryFilters {
	sortBy: string
	priceFrom: string
	priceTo: string
	ratings: string
	languages: string
	slices: string
}

type Props = {
	handleCourses: (courses: CourseWithTag[]) => void
}

export const Filter: React.FC<Props> = ({ handleCourses }) => {
	const router = useRouter()
	const params = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	const t = useTranslations()

	const [filtersValues, setFiltersValues] = useState<FiltersProps>({
		sortBy: params.get('sortBy') || undefined,
		price: {
			priceFrom: Number(params.get('priceFrom')) || null,
			priceTo: Number(params.get('priceTo')) || null,
		},
		ratings: params.get('ratings') ? params.get('ratings')!.split(',') : [],
		languages: params.get('languages') ? params.get('languages')!.split(',') : [],
		slices: params.get('slices') ? params.get('slices')!.split(',') : [],
	})

	const updateFilters = (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean,
		price?: { priceFrom: number; priceTo: number }
	) => {
		setFiltersValues(prevFilters => {
			const updatedFilters = { ...prevFilters }

			if (method === 'add') {
				if (filterType === 'ratings' || filterType === 'languages' || filterType === 'slices') {
					updatedFilters[filterType] = [...(updatedFilters[filterType] as string[]), value]
				} else if (filterType === 'sortBy') {
					updatedFilters.sortBy = value
				} else if (filterType === 'price') {
					updatedFilters.price = {
						priceFrom: price?.priceFrom ?? updatedFilters.price.priceFrom,
						priceTo: price?.priceTo ?? updatedFilters.price.priceTo,
					}
				}
			} else if (method === 'delete') {
				if (filterType === 'ratings' || filterType === 'languages' || filterType === 'slices') {
					updatedFilters[filterType] = (updatedFilters[filterType] as string[]).filter(
						item => item !== value
					)
				}
			}

			return updatedFilters
		})
	}

	const allFilters = useMemo(() => {
		return {
			sortBy: filtersValues.sortBy,
			...filtersValues.price,
			ratings: filtersValues.ratings,
			languages: filtersValues.languages,
			slices: filtersValues.slices,
		}
	}, [filtersValues])

	useEffect(() => {
		const query = qs.stringify(allFilters, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}, [allFilters, router])

	const handleClick = () => {
		const query = qs.stringify(allFilters, {
			arrayFormat: 'comma',
		})

		if (query) {
			Api.filters.search(query).then(data => handleCourses(data))
		}
	}

	return (
		<div className='w-[254px] h-full shrink-0 max-tablet:w-full sticky top-[115px] max-tablet:static'>
			<FilterSelect filterSelects={updateFilters} />
			<Range range={updateFilters} />
			<div className='w-full max-tablet:grid max-tablet:grid-cols-1 max-tablet:w-full'>
				<Ratings onChange={updateFilters} defaults={filtersValues} />
				<Languages onChange={updateFilters} defaults={filtersValues} />
				<Slices onChange={updateFilters} defaults={filtersValues} />
				<Button variant='primary' className='w-full mt-6 h-[61px]' onClick={handleClick}>
					{t('show')}
				</Button>
			</div>
		</div>
	)
}
