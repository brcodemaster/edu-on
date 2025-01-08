import { Send } from '@/components/ui'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const CommentsOfCourse: React.FC = () => {
	const t = useTranslations()

	return (
		<>
			<p className='text-black text-3xl font-bold pb-6 max-mobile:pb-3 max-mobile:text-xl'>
				{t('comments')}
			</p>
			<div className='flex gap-4 pt-7'>
				<div className='w-[54px] h-[54px] shrink-0'>
					<Image
						src={'/courses-label-1.png'}
						alt='Sas'
						width={54}
						height={54}
						className='w-full h-full object-contain'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-black font-bold text-lg max-mobile:text-base'>
						Abduvosiq Abdumalikov
					</span>
					<span className='text-gray-primary font-medium max-mobile:text-sm'>
						Zo&apos;r gap yo&apos;q
					</span>
				</div>
			</div>
			<div className='flex gap-4 pt-7'>
				<div className='w-[54px] h-[54px] shrink-0'>
					<Image
						src={'/courses-label-2.png'}
						alt='Sas'
						width={54}
						height={54}
						className='w-full h-full object-contain'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-black font-bold text-lg max-mobile:text-base'>
						Sadriddin Abdurahimov
					</span>
					<span className='text-gray-primary font-medium max-mobile:text-sm'>
						Rahmat, kurs zo&apos;r ekan
					</span>
				</div>
			</div>
			<div className='flex gap-4 pt-7'>
				<div className='w-[54px] h-[54px] shrink-0'>
					<Image
						src={'/courses-label-3.png'}
						alt='Sas'
						width={54}
						height={54}
						className='w-full h-full object-contain'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-black font-bold text-lg max-mobile:text-base'>
						Otabek Nasrullayev
					</span>
					<span className='text-gray-primary font-medium max-mobile:text-sm'>
						Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir
						zo&apos;r !!!
					</span>
				</div>
			</div>
			<div className='flex gap-4 pt-7'>
				<div className='w-[54px] h-[54px] shrink-0'>
					<Image
						src={'/courses-label-4.png'}
						alt='Sas'
						width={54}
						height={54}
						className='w-full h-full object-contain'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-black font-bold text-lg max-mobile:text-base'>Farrux Turgunov</span>
					<span className='text-gray-primary font-medium max-mobile:text-sm'>
						Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash
						kerak ro&apos;yxatdan qanday o&apos;tish kerak shu bo&apos;yicha xam instruksiya qilib
						joylab qo&apos;ysangizlar nur ustiga a&apos;lo nur bo&apos;lar edi. Sababi birinchi
						kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.
					</span>
				</div>
			</div>
			<div className='flex relative pt-9'>
				<input
					name='sendQuestion'
					type='text'
					className='rounded-[18px] bg-blue-secondary outline-none placeholder:text-gray-primary/20 placeholder:font-medium py-[24px] px-[30px] pr-[60px] w-full'
					placeholder={'writeTheAnswer'}
				/>
				<Send className='absolute top-1/2 right-5 cursor-pointer active:scale-110 duration-300' />
			</div>
		</>
	)
}
