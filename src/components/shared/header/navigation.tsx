import { active, menus } from '@/components/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
	className?: string
}

export const Navigation: React.FC<Props> = ({ className }) => {
	return (
		<nav className={cn(className)}>
			<ul className='flex gap-[54px]'>
				{menus &&
					menus.map(menuItem => (
						<li
							key={menuItem.title}
							className={cn(
								`custom-underline group hover:text-black`,
								active === menuItem.title
									? 'font-bold after:opacity-100 after:visible'
									: 'font-medium text-gray-primary'
							)}
						>
							<Link
								href={menuItem.link}
								data-text={menuItem.title}
								className='no-shifting group-hover:font-bold'
							>
								{menuItem.title}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}
