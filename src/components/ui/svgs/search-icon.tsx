'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { CourseWithRelations } from '@/types/types'
import { Course, Speaker } from '@prisma/client'
import { useDebounce } from '@uidotdev/usehooks'
import { Api } from '@/services/api-client'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

export type CourseWithSpeaker = Course & {
	author: Speaker
}

export const SearchIcon: React.FC = () => {
	const [courses, setCourses] = useState<CourseWithSpeaker[]>([])

	const [isFocused, setIsFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [error, setError] = useState<string | null>(null)

	const t = useTranslations()
	const tCourse = useTranslations('coursesTitle')

	const debouncedSearchQuery = useDebounce(searchQuery, 300)

	const sendQuery = () => {
		if (!searchQuery) {
			return
		}

		Api.searchCourses
			.search(debouncedSearchQuery)
			.then(data => setCourses(data))
			.catch(err => setError(err.message))
	}

	useEffect(() => {
		sendQuery()
	}, [debouncedSearchQuery])

	const handleClick = () => {
		setIsFocused(false)
		setCourses([])
		setSearchQuery('')
	}

	return (
		<>
			<div
				className={cn(
					'opacity-0 invisible z-50 duration-300 fixed top-0 left-0 right-0 bottom-0 max-desktop:hidden',
					isFocused && 'opacity-100 visible bg-black/20'
				)}
				onClick={() => {
					setIsFocused(false)
					setSearchQuery('')
				}}
			>
				<div
					className={cn(
						'absolute -top-24 left-[47%] -translate-x-1/2 w-[700px] duration-300 px-16',
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
							value={searchQuery}
							onChange={e => {
								setSearchQuery(e.target.value)
							}}
							placeholder={t('find')}
							autoComplete='on'
							onKeyDown={e => {
								if (e.code === 'Enter') {
									console.log(`Search for ${searchQuery.toLowerCase()}`)
								}
							}}
						/>
						{searchQuery && (
							<i
								className='bx bx-x absolute top-[53%] -translate-y-1/2 right-5 bx-sm'
								onClick={e => {
									setCourses([])
									e.stopPropagation()
									setSearchQuery('')
								}}
							></i>
						)}
					</div>
					<div
						className={cn(
							'mt-10 duration-300 invisible opacity-0',
							courses.length > 0 && 'mt-2 opacity-100 visible'
						)}
					>
						{courses.length > 0 && (
							<div>
								{courses.map(course => (
									<Link
										key={course.id}
										href={`/courses/${course.id}`}
										className='p-3 px-4 bg-white rounded-2xl flex items-center justify-between gap-2 hover:bg-blue-primary hover:text-white mt-1'
										onClick={handleClick}
									>
										<div className='flex items-center justify-start w-full'>
											<div className='w-[50px] h-[50px]'>
												<Image
													src={course.author.imgUrl}
													alt={String(course.author.id)}
													width={40}
													height={40}
													className='w-full h-full object-cover'
												/>
											</div>
											<div className='pl-2 w-full'>
												<div className='grow truncate'>{tCourse(course.title)}</div>
												<p className='font-semibold'>
													{course.author.name} {course.author.lastName}
												</p>
											</div>
										</div>
										<p className='font-medium shrink-0'>
											{new Intl.NumberFormat('ru-RU').format(course.currentPrice)} so&apos;m
										</p>
									</Link>
								))}
							</div>
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
