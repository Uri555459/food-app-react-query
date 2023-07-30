import { useQuery } from '@tanstack/react-query'
import { LOCAL_STORAGE } from '../../constants/localStorage.constants'
import { getLocalStorage } from '../../utils/localStorage'
import { userApi } from '../../api/user/user.api'

export const useBasket = () => {
	const userId = Number(getLocalStorage(LOCAL_STORAGE.USER_ID))

	const { data: user, isSuccess } = useQuery({
		queryKey: ['products'],
		queryFn: () => userApi.getUser(userId),
	})

	return { user, isSuccess }
}
