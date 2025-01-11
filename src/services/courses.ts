import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'

export const search = async (query?: string) => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_COURSES, { params: { id: query } })).data
}
