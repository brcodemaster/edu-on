import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'
import { CourseWithRelations } from '@/types/types'

export const search = async (): Promise<CourseWithRelations[]> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_COURSES)).data
}
