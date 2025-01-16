'use client'

import React, { useEffect, useState } from 'react'
import { DualRangeSlider } from '@/components/core/slider'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { FiltersProps } from './filter'

type Props = {
	range: (
		value: string,
		filterType: keyof FiltersProps,
		method: 'add' | 'delete',
		isChecked?: boolean,
		price?: { priceFrom: number; priceTo: number }
	) => void
}

export const Range: React.FC<Props> = ({ range }) => {
	const t = useTranslations()
	const searchParams = useSearchParams()
	const [prices, setPrices] = useState<number[]>([
		Number(searchParams.get('priceFrom')) || 0,
		Number(searchParams.get('priceTo')) || 10000000,
	])

	useEffect(() => {
		range('Price of course', 'price', 'add', false, { priceFrom: prices[0], priceTo: prices[1] })
	}, [prices])

	return (
		<>
			<div className='flex flex-col mx-auto gap-1 pt-6 pb-6 px-2 border-b-[2px] border-gray-secondary'>
				<span className='text-gray-primary font-medium pb-2'>{t('prices')}</span>
				<DualRangeSlider
					value={prices}
					onValueChange={setPrices}
					min={0}
					max={10000000}
					step={50000}
				/>
				<div className='flex justify-between items-center pt-2 text-[15px]'>
					<span>{new Intl.NumberFormat('ru-RU').format(prices[0])} so&apos;m</span>
					<span>{new Intl.NumberFormat('ru-RU').format(prices[1])} so&apos;m</span>
				</div>
			</div>
		</>
	)
}
