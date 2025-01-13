import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
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
	} catch (error: any) {
		console.log(error)

		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
