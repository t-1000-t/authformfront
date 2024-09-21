import axios from '../utils/axios'

const getList = async () => {
  const result = await axios.get('/api/users/list')
  console.log('result.data', result.data)
  return result.data
 
}

export default getList
