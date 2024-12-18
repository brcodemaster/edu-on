import {
	Accordion,
	Categories,
	Input,
	Section,
	Send,
	SwitchCase,
	TitleWithDescription,
} from '@/components/ui'

export default function Page() {
	return (
		<Section className='flex flex-col justify-center items-center pt-[136px]'>
			<div className='flex flex-col justify-center pb-9'>
				<TitleWithDescription
					size='xxl'
					title="Ko'p beriladigan"
					subTitle='savollarga javoblar'
					description='Siz ham savol yo’llashingiz mumkin, 6 soat ichida javob beramiz.'
				/>
				<div className='flex relative pt-9'>
					<input
						type='text'
						className='rounded-[18px] bg-blue-secondary outline-none placeholder:text-gray-primary/20 placeholder:font-medium py-[24px] px-[30px] pr-[60px] w-full'
						placeholder='Savolingizni yozing...'
					/>
					<Send className='absolute top-1/2 right-5 cursor-pointer active:scale-110 duration-300' />
				</div>
				<SwitchCase leftSide="Bo'limlar bo'yicha" rightSide="Ustozlar bo'yicha" />
			</div>
			<div className='pt-9 w-full flex flex-col justify-center items-center border-t-2 border-gray-secondary'>
				<div className='flex justify-center items-center max-w-[800px] max-tablet:max-w-full'>
					<Categories />
				</div>
				<div className='pt-9 w-full flex flex-col gap-[18px]'>
					<Accordion
						text='Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?'
						description='Ha albatta bo‘ladi. Online to‘lovni Click, Payme, Apelsin va bank online to‘lov sistemalari orqali amalga oshirish mumkin. Profilga o‘tib, to‘lov tizimlaridan o’zingiz xohlagan tizimni qo’shish orqali amalga oshirasiz.'
					/>
					<Accordion
						text='Kurs pulini bo‘lib to‘lash imkoniyati mavjudmi?'
						description='Ha albatta bo‘ladi. Online to‘lovni Click, Payme, Apelsin va bank online to‘lov sistemalari orqali amalga oshirish mumkin. Profilga o‘tib, to‘lov tizimlaridan o’zingiz xohlagan tizimni qo’shish orqali amalga oshirasiz.'
					/>
					<Accordion
						text='Kurs uchun to‘lovni online amalga oshirsam bo‘ladimi?'
						description='Ha albatta bo‘ladi. Online to‘lovni Click, Payme, Apelsin va bank online to‘lov sistemalari orqali amalga oshirish mumkin. Profilga o‘tib, to‘lov tizimlaridan o’zingiz xohlagan tizimni qo’shish orqali amalga oshirasiz.'
					/>
					<Accordion
						text='Kurs uchun to‘lo‘vni qanday amalga oshirsam bo‘ladi?'
						description='Ha albatta bo‘ladi. Online to‘lovni Click, Payme, Apelsin va bank online to‘lov sistemalari orqali amalga oshirish mumkin. Profilga o‘tib, to‘lov tizimlaridan o’zingiz xohlagan tizimni qo’shish orqali amalga oshirasiz.'
					/>
					<Accordion
						text='Sotib olingan kurslar qancha vaqtga beriladi? Doimiymi yoki ma’lum bir belgilangan muddatgachami?'
						description='Ha albatta bo‘ladi. Online to‘lovni Click, Payme, Apelsin va bank online to‘lov sistemalari orqali amalga oshirish mumkin. Profilga o‘tib, to‘lov tizimlaridan o’zingiz xohlagan tizimni qo’shish orqali amalga oshirasiz.'
					/>
				</div>
			</div>
		</Section>
	)
}
