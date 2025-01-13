import { cn } from '@/lib/utils'

type Props = {
	title: string
	activeCategory: string
}

export const CategoryBrick: React.FC<Props> = ({ title, activeCategory }) => {
	return (
		<div
			className={cn(
				'py-[14px] px-4 rounded-xl text-gray-primary w-auto hover:bg-blue-secondary hover:text-blue-primary font-medium cursor-pointer duration-300 whitespace-nowrap',
				activeCategory === title.toLocaleLowerCase() && 'bg-blue-secondary text-blue-primary'
			)}
		>
			{title}
		</div>
	)
}
