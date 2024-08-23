import axios from '../utils/axios'

const getList = async () => {


  try {
    const result = await axios.get('/api/users/list')

    console.log('result.data', result.data)
    return result.data
  } catch (e) {
    throw e
  }
}

export default getList