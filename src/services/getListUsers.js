import axios from '../utils/axios'

const getList = async () => {
  const result = await axios.get('/api/users/list')
  return result.data
}

export default getList
