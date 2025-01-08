import { Section } from '@/components/ui'
import { Navigation } from './navigation'
import { socialMedia } from '@/components/constants'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Footer: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='flex flex-col pt-[80px] max-mobile:pt-[30px] font-[gilroy] max-tablet:pt-[40px]'>
			<div className='flex gap-[172px] pb-[50px] max-tablet:flex-col max-tablet:gap-[50px] p-0'>
				<div className='flex flex-col max-tablet:flex-row max-tablet:justify-between max-tablet:gap-5 max-mobile:flex-col max-mobile:justify-center max-mobile:items-center max-tablet:hidden'>
					<div className='flex items-center gap-[18px] max-tablet:pt-0 max-tablet:items-start'>
						{socialMedia &&
							socialMedia.map(media => (
								<a
									key={media.alt}
									href={media.link}
									className='flex justify-center items-center grayscale border rounded-full p-2 hover:bg-gray-primary/10 duration-300 '
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className={`bx ${media.icon} opacity-50 bx-sm bx-[5px]`}></i>
								</a>
							))}
					</div>
				</div>
				<Navigation />
			</div>
			<div className='border-t border-border py-[30px] font-medium text-gray-primary max-mobile:flex-col px-8'>
				<div className='max-w-[307px] mx-auto text-center'>
					©{' '}
					<Link href='/' className='text-blue-primary max-mobile:contents'>
						{t('edu')}.
					</Link>{' '}
					{t('AllRights')}
				</div>
			</div>
		</Section>
	)
}
