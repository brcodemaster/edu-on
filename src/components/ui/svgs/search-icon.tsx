import { cn } from '@/lib/utils'
import { group } from 'console'

export const SearchIcon: React.FC = () => {
	return (
		<span className='cursor-pointer group'>
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
	)
}
