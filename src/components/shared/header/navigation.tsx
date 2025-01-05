'use client'

import { menus } from '@/components/constants'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

type Props = {
	className?: string
}

export const Navigation: React.FC<Props> = ({ className }) => {
	const path = usePathname()
	const active = `/${path.split('/').slice(2)}`

	const t = useTranslations('navigation')

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
								data-text={t(menuItem.title)}
								className='no-shifting group-hover:font-bold'
							>
								{t(menuItem.title)}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}
