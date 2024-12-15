import Image from 'next/image'
import { Star } from './star'
import { Button } from './button'

type Props = {
	name: string
	specialist: string
	imgUrl: string
	alt: string
	company: string
	rating: number
	comments: number
	className?: string
}

export const SpeakerBlock: React.FC<Props> = ({
	name,
	specialist,
	imgUrl,
	alt,
	company,
	rating,
	comments,
	className,
}) => {
	return (
		<div className='w-[192px] h-[269px] border border-gray- rounded-[30px] flex flex-col items-center justify-between p-[18px]'>
			<div className='w-[60px] h-[60px] rounded-2xl'>
				<Image
					src={imgUrl}
					alt={alt}
					width={60}
					height={60}
					className='w-[60px] h-[60px] object-cover'
				/>
			</div>
			<div>
				<p className='text-black font-medium text-[20px]'>{name}</p>
				<p className='text-gray-primary font-medium text-sm'>{specialist}</p>
				<p className='text-gray-primary font-medium text-sm'>{company}</p>
			</div>
			<div className='flex gap-2 items-center'>
				<Star /> {rating} <p className='text-gray-primary'>({comments})</p>
			</div>
			<Button variant={'grayscale'} className='w-full h-[37px] leading-[0] font-medium'>
				Profil
			</Button>
		</div>
	)
}
