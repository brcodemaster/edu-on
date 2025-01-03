import { Footer, Header } from '@/components/shared'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
	title: 'Edu-On',
	description: 'Educational Portal Edu On',
}

export default async function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	const messages = await getMessages()

	return (
		<NextIntlClientProvider messages={messages}>
			<Header />
			<main className='font-[gilroy]'>
				{children}
				{modal}
			</main>
			<Footer />
		</NextIntlClientProvider>
	)
}
