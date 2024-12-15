import { Button, Section, Title } from '@/components/ui'

export const Superiority: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[20px] font-bold'>USTUNLIK</p>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px]'>
					Nega <span className='text-black'>aynan EduOn?</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative w-full'>
				<div className='max-w-[820px] h-[200px] max-tablet:max-w-[400px] max-mobile:max-w-[200px] inline-flex items-start justify-between gap-[34px] w-full overflow-x'>
					<div className='flex items-center gap-[18px] pt-9 max-mobile:flex-col'></div>
				</div>
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
