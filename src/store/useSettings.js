import create from 'zustand'
import { persist } from 'zustand/middleware'

const defaultState = {
  playSounds: true,
  pieces: 'Classic',
  boardColor: 'Blue',
  background: 'yellow',
}

const store = (set, get) => ({
  ...defaultState,
  current: () => {
    return {
      sounds: get().playSounds,
      pieces: get().pieces,
      board: get().boardColor,
      bg: get().background,
    }
  },
})

const useSettingsStore = create(persist(store, { name: 'settings' }))

export default useSettingsStore
