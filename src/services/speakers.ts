import { Speaker } from '@prisma/client'
import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'

export const search = async (): Promise<Speaker[]> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_SPEAKERS)).data
}
