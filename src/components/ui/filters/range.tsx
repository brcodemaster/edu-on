'use client'

import React, { useState } from 'react'
import { DualRangeSlider } from '@/components/core/slider'

export const Range: React.FC = () => {
	const [values, setValues] = useState([50000, 10000000])

	return (
		<>
			<div className='flex flex-col mx-auto gap-1 pt-6 pb-6 px-2 border-b-[2px] border-gray-secondary'>
				<span className='text-gray-primary font-medium pb-2'>Narxlar:</span>
				<DualRangeSlider
					value={values}
					onValueChange={setValues}
					min={50000}
					max={10000000}
					step={50000}
				/>
				<div className='flex justify-between items-center pt-2'>
					<span>{values[0]} so&apos;m</span>
					<span>{values[1]} so&apos;m</span>
				</div>
			</div>
		</>
	)
}
