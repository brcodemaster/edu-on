import { Checbox } from '../inputs'
import { Star } from '../svgs'

export const Ratings: React.FC = () => {
	return (
		<div className='pt-6'>
			<span className='text-gray-primary font-medium'>Reyting</span>
			<label className='flex justify-between items-center select-none pt-5 cursor-pointer'>
				<span className='text-blue-primary font-medium flex items-center gap-1'>
					<Star /> 4,5 - 5 <span className='opacity-50 font-medium'>(12,965)</span>
				</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-blue-primary font-medium flex items-center gap-1'>
					<Star /> 4,0 - 4,5 <span className='opacity-50 font-medium'>(98,144)</span>
				</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-blue-primary font-medium flex items-center gap-1'>
					<Star /> 3,0 - 4,0 <span className='opacity-50 font-medium'>(6,387)</span>
				</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-blue-primary font-medium flex items-center gap-1'>
					<Star /> 2,0 - 3,0 <span className='opacity-50 font-medium'>(165)</span>
				</span>
				<Checbox name='4.5-5' />
			</label>
		</div>
	)
}
