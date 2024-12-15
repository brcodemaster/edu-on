import Image from 'next/image'

type Props = {
	imgUrl: string
	alt: string
	name: string
	role: "O'quvchi" | "O'qituvchi"
	comment: string
}

export const ThoughtBlock: React.FC<Props> = ({ imgUrl, alt, name, role, comment }) => {
	return (
		<div className='w-[239px] rounded-3xl flex flex-col justify-start items-center hover:scale-110 duration-300 group h-[90px] hover:h-[202px] p-4 overflow-hidden relative border border-gray-secondary'>
			<div className='flex justify-start items-center gap-2 w-full'>
				<div className='w-[56px] h-[56px] rounded-2xl'>
					<Image
						src={imgUrl}
						alt={alt}
						width={56}
						height={56}
						className='w-[56px] h-[56px] object-cover'
					/>
				</div>
				<div className='flex flex-col justify-center items-start'>
					<p>{name}</p>
					<p>{role}</p>
				</div>
			</div>
			<div className='py-4 px-1 leading-[16px] w-[200px] duration-300 opacity-0 h-0 invisible group-hover:opacity-100 group-hover:visible'>
				{comment}
			</div>
		</div>
	)
}
