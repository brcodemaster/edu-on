import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Edu-On',
	description: 'Educational Portal Edu On',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className='font-[gilroy]'>{children}</main>
		</>
	)
}
