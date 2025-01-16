'use client'

import { cn } from '@/lib/utils'
import { Arrows } from './arrows'

type Props = {
	handleChangePage: (page: number) => void
	page: number
}

export const Pagination: React.FC<Props> = ({ handleChangePage, page }) => {
	return (
		<div className='relative w-[307px] flex items-center justify-center pt-[42px] mx-auto max-mobile:w-[100px]'>
			<div className='flex items-center gap-3 px-4'>
				{Array.from({ length: 5 }, (_, ind) => (
					<span
						key={ind}
						className={cn(
							'w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 duration-300',
							page === ind + 1 && 'opacity-100'
						)}
						onClick={() => handleChangePage(ind + 1)}
					>
						{ind + 1}
					</span>
				))}
			</div>
			<Arrows top='70%' yPosition='0' index={7} className='max-mobile:hidden' />
		</div>
	)
}
