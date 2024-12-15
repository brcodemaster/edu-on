import Image from 'next/image'

import { ArrowToBottom, Button, SearchIcon, Section } from '@/components/ui'
import Link from 'next/link'
import { languages } from '@/components/constants'
import { Navigation } from './navigation'

export const Header: React.FC = () => {
	return (
		<header className='py-6 sticky top-0 z-10 backdrop-blur-xl bg-white/30'>
			<Section className='flex justify-between items-center gap-2'>
				<Link href='/'>
					<Image src='/logo.svg' alt='Logo-icon' width={120} height={62} priority />
				</Link>
				<Navigation className='max-tablet:hidden' />
				<div className='flex items-center gap-[30px]'>
					<div className='max-desktop:hidden flex gap-[30px]'>
						<SearchIcon />
						<div className='group/language text-gray-primary relative cursor-pointer'>
							<div className='flex items-center gap-1 font-medium'>
								O&apos;z
								<ArrowToBottom className='group-hover/language:rotate-180 duration-300 delay-100' />
							</div>
							<div className='opacity-0 invisible group-hover/language:opacity-100 group-hover/language:visible absolute top-4 right-0 shadow-lg p-5 rounded-[16px] font-medium duration-300 flex flex-col justify-center items-start gap-3'>
								{languages &&
									languages.map(language => (
										<span
											className='hover:text-black cursor-pointer duration-300'
											key={language.label}
										>
											{language.title}
										</span>
									))}
							</div>
						</div>
					</div>
					<Button className='hover:bg-blue-primary/15' variant='secondary'>
						Kirish
					</Button>
				</div>
			</Section>
		</header>
	)
}
