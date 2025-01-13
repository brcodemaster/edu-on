import { Speaker } from '@prisma/client'
import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'

export const search = async (query: string): Promise<Speaker> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_SPEAKER, { params: { id: query } })).data
}
