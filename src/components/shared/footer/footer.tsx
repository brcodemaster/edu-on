import { Logo, Section } from '@/components/ui'
import { Navigation } from './navigation'
import { SwitchButton } from './switch-button'
import { socialMedia } from '@/components/constants'
import Link from 'next/link'

export const Footer: React.FC = () => {
	return (
		<Section className='flex flex-col pt-[100px] max-mobile:pt-[30px] font-[gilroy]'>
			<div className='flex gap-[172px] pb-[50px] max-tablet:flex-col max-tablet:gap-[50px]'>
				<div className='flex flex-col max-tablet:flex-row max-tablet:gap-5 max-mobile:flex-col max-mobile:justify-center max-mobile:items-center'>
					<Logo />
					<SwitchButton />
					<div className='flex items-center gap-[18px] pt-[80px] max-tablet:pt-0 max-tablet:items-start'>
						{socialMedia &&
							socialMedia.map(media => (
								<a
									key={media.alt}
									href={media.link}
									className='w-6 h-6 flex items-center grayscale'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img className='opacity-50' src={media.imgUrl} alt={media.alt} />
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
						EduOn.
					</Link>{' '}
					Barcha huquqlar himoyalangan
				</div>
			</div>
		</Section>
	)
}
