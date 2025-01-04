import { Button, Container, Logo, SearchIcon } from '@/components/ui'
import { Navigation } from './navigation'
import { LocaleSwitcher } from './localeSwitcher'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Header: React.FC = () => {
	const t = useTranslations()

	return (
		<header className='py-6 sticky top-0 z-10 bg-white font-[gilroy] flex items-center'>
			<Container className='flex justify-between items-center gap-2 w-full'>
				<Link href='/'>
					<Logo />
				</Link>
				<Navigation className='max-tablet:hidden' />
				<div className='flex items-center gap-[30px]'>
					<div className='max-desktop:hidden flex gap-[30px]'>
						<SearchIcon />
						<LocaleSwitcher />
					</div>
					<Link href='/login'>
						<Button className='hover:bg-blue-primary/15' variant='secondary'>
							{t('signin')}
						</Button>
					</Link>
				</div>
			</Container>
		</header>
	)
}
