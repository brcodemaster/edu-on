'use client'

import { menus } from '@/components/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	className?: string
}

export const Navigation: React.FC<Props> = ({ className }) => {
	const path = usePathname()
	const active = '/' + path.split('/')[1]

	return (
		<nav className={cn(className)}>
			<ul className='flex gap-[54px]'>
				{menus &&
					menus.map(menuItem => (
						<li
							key={menuItem.title}
							className={cn(
								`custom-underline group hover:text-black`,
								active === menuItem.link
									? 'font-bold after:opacity-100 after:visible after:w-[31px]'
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
