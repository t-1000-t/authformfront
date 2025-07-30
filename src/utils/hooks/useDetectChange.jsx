import { useEffect } from 'react'
import { isEqual } from 'lodash'
import useAuthStore from '../../store/useAuthStore'

const useDetectChange = () => {
  const { currentData, setHasChanged, cv } = useAuthStore()

  useEffect(() => {
    if (currentData.section === 'strSkills') {
      const currentSkills = cv?.user?.newData?.skills ?? []
      const changed = !isEqual(currentData.localData, currentSkills)
      setHasChanged(changed)
    }
  }, [currentData, cv?.user?.newData?.skills])
}

export default useDetectChange
