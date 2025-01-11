export const SkeletonCourse: React.FC = () => {
	return (
		<div className='w-[253px] h-[321px] animate-pulse flex flex-col gap-2'>
			<div className='bg-gray-secondary/20 rounded-2xl w-[252px] h-[168px]' />
			<div className='flex items-center gap-2 h-[50px]'>
				<div className='w-[80%] h-full bg-gray-secondary/20 rounded-2xl' />
				<div className='w-[20%] h-full bg-gray-secondary/20 rounded-2xl' />
			</div>
			<div className='flex items-center gap-2 h-[20px]'>
				<div className='w-[35%] h-full bg-gray-secondary/20 rounded-2xl' />
				<div className='w-[35%] h-full bg-gray-secondary/20 rounded-2xl ml-7' />
			</div>
			<div className='pt-2 border-t border-gray-secondary flex justify-between h-[55px]'>
				<div className='w-[44%] h-full bg-gray-secondary/20 rounded-xl' />
				<div className='w-[44%] h-full bg-gray-secondary/20 rounded-xl' />
			</div>
		</div>
	)
}
