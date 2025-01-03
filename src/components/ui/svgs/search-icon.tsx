'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export const SearchIcon: React.FC = () => {
	const [isFocused, setIsFocused] = useState(false)
	const [query, setQuery] = useState('')
	const t = useTranslations()

	return (
		<>
			<div
				className={cn(
					'opacity-0 invisible z-50 duration-300 fixed top-0 left-0 right-0 bottom-0',
					isFocused && 'opacity-100 visible bg-black/20'
				)}
				onClick={() => {
					setIsFocused(false)
					setQuery('')
				}}
			>
				<div
					className={cn(
						'absolute -top-24 left-[47%] -translate-x-1/2 w-[700px] duration-300 rounded-full px-16 pb-5',
						isFocused && 'opacity-100 visible top-6'
					)}
					onClick={e => {
						e.stopPropagation()
					}}
				>
					<div className='relative'>
						<input
							type='text'
							name='query'
							className='px-8 text-lg outline-none font-medium w-full h-14 duration-300 rounded-3xl border border-border shadow-inner placeholder:text-gray-primary/30'
							value={query}
							onChange={e => {
								setQuery(e.target.value)
							}}
							placeholder={t('find')}
							autoComplete='on'
							onKeyDown={e => {
								if (e.code === 'Enter') {
									console.log(`Search for ${query.toLowerCase()}`)
								}
							}}
						/>
						{query && (
							<i
								className='bx bx-x absolute top-[53%] -translate-y-1/2 right-5 bx-sm'
								onClick={e => {
									e.stopPropagation()
									setQuery('')
								}}
							></i>
						)}
					</div>
				</div>
			</div>
			<span
				className='cursor-pointer group'
				onClick={() => {
					setIsFocused(true)
				}}
			>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Search'>
						<g id='Search_2'>
							<circle
								id='Ellipse_739'
								cx='9.80687'
								cy='9.8055'
								r='7.49047'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='stroke-gray-primary group-hover:stroke-black duration-300'
							/>
							<path
								id='Line_181'
								d='M15.0156 15.4043L17.9523 18.3333'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='stroke-gray-primary group-hover:stroke-black duration-300'
							/>
						</g>
					</g>
				</svg>
			</span>
		</>
	)
}
