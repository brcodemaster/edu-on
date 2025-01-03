import { aboutUs } from '@/components/constants'
import { Section, Title, TitleWithDescription } from '@/components/ui'
import { useTranslations } from 'next-intl'

export default function AboutUs() {
	const t = useTranslations('aboutUsPage')

	return (
		<Section className='flex flex-col justify-center items-center pt-[136px]'>
			<div className='flex flex-col'>
				<TitleWithDescription size='xxl' title={t('platform')} subTitle={t('use')} />
			</div>
			<ol className='flex flex-col justify-start items-start w-full pt-[172px]'>
				{aboutUs &&
					aboutUs.map((section, ind) => (
						<li key={section.title} className='pb-[18px]'>
							<Title size='lg' className='pb-[18px]'>{`${ind + 1}. ${t(section.title)}`}</Title>
							{section.subtitle && <p className='font-medium text-lg'>{t(section.subtitle)}</p>}
							<ul>
								{section.children &&
									section.children.map((child, childInd) => (
										<li key={child.title}>
											<Title size='md' className='pb-[18px]'>{`${ind + 1}.${childInd + 1} ${t(
												child.title
											)}`}</Title>
											{child.description && <p className='pb-[18px]'>{t(child.description)}</p>}
										</li>
									))}
							</ul>
						</li>
					))}
			</ol>
		</Section>
	)
}
