import { useEffect } from 'react'
import { isEqual } from 'lodash'
import useAuthStore from '../../store/useAuthStore'

const useDetectChange = () => {
  const { currentData, setHasChanged, cv } = useAuthStore()

  useEffect(() => {
    if (currentData.section === 'strPet') {
      const currentPet = cv?.user?.newData?.pet ?? {}
      const changed = !isEqual(currentData.localData, currentPet)
      setHasChanged(changed)
    }
    if (currentData.section === 'strEducation') {
      const currentEducation = cv?.user?.newData?.education ?? {}
      const changed = !isEqual(currentData.localData, currentEducation)
      setHasChanged(changed)
    }
    if (currentData.section === 'strContacts') {
      const currentContacts = cv?.user?.newData?.contacts ?? {}
      const changed = !isEqual(currentData.localData, currentContacts)
      setHasChanged(changed)
    }
    if (currentData.section === 'strTitles') {
      const currentTitles = cv?.user?.newData?.title ?? {}
      const changed = !isEqual(currentData.localData, currentTitles)
      setHasChanged(changed)
    }
    if (currentData.section === 'strSkills') {
      const currentSkills = cv?.user?.newData?.skills ?? []
      const changed = !isEqual(currentData.localData, currentSkills)
      setHasChanged(changed)
    }
  }, [currentData, cv?.user?.newData?.skills])
}

export default useDetectChange
