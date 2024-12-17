import { Arrows } from './arrows'

export const Pagination: React.FC = () => {
	return (
		<div className='relative w-[307px] flex items-center justify-center pt-[42px] mx-auto max-mobile:w-[100px]'>
			<div className='flex items-center gap-3 px-4'>
				<span className='w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 duration-300'>
					1
				</span>
				<span className='w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 duration-300'>
					2
				</span>
				<span className='w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 duration-300'>
					3
				</span>
				<span className='w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 duration-300'>
					4
				</span>
				<span className='w-9 h-9 bg-blue-secondary rounded-lg text-blue-primary font-medium flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 duration-300'>
					5
				</span>
			</div>
			<Arrows top='70%' yPosition='0' index={7} className='max-mobile:hidden' />
		</div>
	)
}
