import { Button, Container, Logo, SearchIcon } from '@/components/ui'
import { Navigation } from './navigation'
import { LocaleSwitcher } from './localeSwitcher'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Header: React.FC = () => {
	const t = useTranslations()

	return (
		<header className='py-6 sticky top-0 z-50 bg-white font-[gilroy] flex items-center max-tablet:py-4 max-mobile:py-3'>
			<Container className='flex justify-between items-center gap-2 w-full'>
				<Link
					href='/'
					className='w-[120px] h-[35px] max-tablet:w-[110px] max-tablet:h-[30px] max-mobile:w-[100px] max-mobile:h-[25px]'
				>
					<Logo />
				</Link>
				<Navigation className='max-tablet:hidden' />
				<div className='flex items-center gap-[30px] max-mobile:gap-[10px]'>
					<div className='flex gap-[30px] max-desktop:hidden'>
						<SearchIcon />
					</div>
					<LocaleSwitcher />
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
