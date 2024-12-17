type Props = {
	title: string
}

export const CategoryBrick: React.FC<Props> = ({ title }) => {
	return (
		<div className='py-[14px] px-4 rounded-xl text-gray-primary w-auto hover:bg-blue-secondary hover:text-blue-primary font-medium cursor-pointer duration-300 whitespace-nowrap'>
			{title}
		</div>
	)
}
