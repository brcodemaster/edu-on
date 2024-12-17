import { Checbox } from '../inputs'

export const Slices: React.FC = () => {
	return (
		<div className='pt-6 border-t-[2px] border-gray-secondary mt-6'>
			<span className='text-gray-primary font-medium'>Bo&apos;limlar</span>
			<label className='flex justify-between items-center select-none pt-5 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Frontend</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Backend</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Flutter</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>Mobile</span>
				<Checbox name='4.5-5' />
			</label>
			<label className='flex justify-between items-center select-none pt-3 cursor-pointer'>
				<span className='text-gray-primary/75 font-medium flex items-center gap-1'>
					Sun&apos;iy intelekt
				</span>
				<Checbox name='4.5-5' />
			</label>
		</div>
	)
}
