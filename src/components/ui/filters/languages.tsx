import { Checbox } from '../inputs'
import { Star } from '../svgs'

export const Languages: React.FC = () => {
	return (
		<div className='pt-6 mt-6 border-t-[2px] border-gray-secondary max-tablet:border-0 max-tablet:pt-0 max-mobile:pt-6 max-mobile:border-t-2 max-mobile:border-gray-secondary'>
			<span className='text-gray-primary font-medium'>Til</span>
			<label className='flex justify-between items-center select-none pt-5 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>
					O&apos;zbekcha
				</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Ruscha</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Inglizcha</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Qozoqcha</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Tojikcha</span>
				<Checbox name='4.5-5' />
			</label>
		</div>
	)
}
