import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await prisma.speaker.findMany()

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка speakers server')

		return NextResponse.json({ error: err.message }, { status: 500 })
	}
}
