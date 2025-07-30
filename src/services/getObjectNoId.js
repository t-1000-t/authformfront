const getObjectNoId = (item) => {
  return Object.keys(item)
    .filter((f) => f !== '_id' && f !== 'id')
    .reduce((obj, key) => ({ ...obj, [key]: item[key] }), {})
}

export default getObjectNoId
