import localFont from 'next/font/local'
import 'swiper/css'
import '../globals.css'

const gilroy = localFont({
	src: [
		{
			path: '../fonts/Gilroy-Thin.ttf',
			weight: '100',
		},
		{
			path: '../fonts/Gilroy-UltraLight.ttf',
			weight: '200',
		},
		{
			path: '../fonts/Gilroy-Light.ttf',
			weight: '300',
		},
		{
			path: '../fonts/Gilroy-Regular.ttf',
			weight: '400',
		},
		{
			path: '../fonts/Gilroy-Medium.ttf',
			weight: '500',
		},
		{
			path: '../fonts/Gilroy-SemiBold.ttf',
			weight: '600',
		},
		{
			path: '../fonts/Gilroy-Bold.ttf',
			weight: '700',
		},
		{
			path: '../fonts/Gilroy-ExtraBold.ttf',
			weight: '800',
		},
		{
			path: '../fonts/Gilroy-Black.ttf',
			weight: '900',
		},
	],
	variable: '--font-gilroy',
})

const samsungSharp = localFont({
	src: [
		{
			path: '../fonts/samsungsharpsans-bold.otf',
			weight: '700',
		},
	],
	variable: '--font-samsungSharp',
})

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: {
		locale: string
	}
}>) {
	const { locale } = await params

	return (
		<html lang={locale}>
			<head>
				<link rel='shortcut icon' type='image/x-icon' href='/logo.svg' />
				<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			</head>
			<body className={`${gilroy.variable} ${samsungSharp.variable} antialiased`}>{children}</body>
		</html>
	)
}
