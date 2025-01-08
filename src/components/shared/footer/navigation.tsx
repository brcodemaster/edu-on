import { footerNavigations } from '@/components/constants'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Navigation: React.FC = () => {
	const t = useTranslations('footer')

	return (
		<nav>
			<ul className='grid grid-cols-3 gap-[58px] max-mobile:grid-cols-1'>
				{footerNavigations &&
					footerNavigations.map(navItem => (
						<li key={navItem.title} className='flex flex-col max-w-[238px]'>
							<p className='font-medium text-gray-primary pb-[42px] max-tablet:pb-[30px] max-mobile:pb-[20px]'>
								{t(`${navItem.title}`)}
							</p>
							{navItem.children &&
								navItem.children.map(child =>
									child.title ===
									"Toshkent sh. Yakkasaroy t. Shota Rustaveli 1-tor ko'chasi, 6-uy" ? (
										<a
											key={child.title}
											className='font-medium py-3 hover:opacity-70 duration-300'
											href={child.link}
											target='_blank'
										>
											{t(`${child.title}`)}
										</a>
									) : (
										<Link
											key={child.title}
											className='font-medium py-3 hover:opacity-70 duration-300'
											href={child.link}
										>
											{t(`${child.title}`)}
										</Link>
									)
								)}
						</li>
					))}
			</ul>
		</nav>
	)
}
