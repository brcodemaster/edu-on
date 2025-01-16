import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await prisma.course.findMany({
			where: {
				rating: {
					gt: 4.5,
				},
			},
			include: {
				courseParam: true,
			},
		})

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка topCourses server')

		return NextResponse.json({ error: err.message }, { status: 500 })
	}
}
