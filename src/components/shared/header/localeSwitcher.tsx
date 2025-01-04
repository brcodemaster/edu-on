'use client'

import { languages } from '@/components/constants'
import { useRouter, usePathname } from 'next/navigation'
import { ArrowToBottom } from '@/components/ui'
import { useLocale } from 'next-intl'

const currentLocales = {
	en: 'Eng',
	uz: "O'z",
}

export const LocaleSwitcher: React.FC = () => {
	const localeActive = useLocale() as keyof typeof currentLocales
	const router = useRouter()
	const pathname = usePathname() // Получаем текущий путь

	const switchLocale = (locale: string) => {
		if (locale !== localeActive) {
			router.replace(`/${locale}${pathname.slice(3)}`, { scroll: false })
		}
	}

	return (
		<div className='group/language text-gray-primary relative cursor-pointer z-30'>
			<div className='flex items-center gap-1 font-medium'>
				{currentLocales[localeActive]}
				<ArrowToBottom className='group-hover/language:rotate-180 duration-300 delay-100' />
				<div className='opacity-0 invisible group-hover/language:opacity-100 group-hover/language:visible absolute top-4 right-0 shadow-lg p-5 rounded-[16px] font-medium duration-300 flex flex-col justify-center items-start gap-3 bg-white'>
					{languages &&
						languages.map(language => (
							<span
								className='hover:text-black cursor-pointer duration-300'
								key={language.label}
								onClick={() => switchLocale(language.locale)}
							>
								{language.title}
							</span>
						))}
				</div>
			</div>
		</div>
	)
}
