import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
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
	} catch (error: any) {
		console.log(error)

		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
