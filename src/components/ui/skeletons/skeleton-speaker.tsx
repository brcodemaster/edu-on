export const SkeletonSpeaker: React.FC = () => {
	return (
		<div className='w-[192px] h-[269px] p-[18px] animate-pulse flex flex-col items-center border border-border rounded-[30px]'>
			<div className='bg-gray-secondary/20 rounded-2xl w-[60px] h-[60px]' />
			<div className='w-full flex flex-col justify-center items-center gap-1 py-1'>
				<div className='w-[80%] h-5 bg-gray-secondary/20 rounded-xl' />
				<div className='w-[50%] h-5 bg-gray-secondary/20 rounded-xl' />
				<div className='w-[50%] h-5 bg-gray-secondary/20 rounded-xl' />
			</div>
			<div className='w-[80%] h-5 mt-2 bg-gray-secondary/20 rounded-xl' />
			<div className='w-[90%] h-10 mt-3 bg-gray-secondary/20 rounded-xl' />
		</div>
	)
}
