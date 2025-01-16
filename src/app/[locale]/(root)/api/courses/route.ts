import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await prisma.course.findMany({
			include: {
				author: true,
				audience: true,
				comments: true,
				contents: true,
				courseParam: true,
				profits: true,
			},
		})

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка courses server')

		console.log(error)

		return NextResponse.json({ error: err.message }, { status: 500 })
	}
}
