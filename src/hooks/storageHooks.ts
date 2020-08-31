import store from 'store2'
import { useState, useCallback } from 'react'
import { Node } from 'slate'
import debounce from 'lodash/debounce'

const STORAGE_KEY = 'STATE'

const getStateFromStorage: () => Node[] = () => {
  const state = store.get(STORAGE_KEY)
  if (state) {
    return JSON.parse(state)
  }
  return [
    {
      type: 'paragraph',
      children: [{ text: 'Type here...' }],
    },
  ]
}

export const useAppState = () => {
  return useState<Node[]>(getStateFromStorage)
}

export const useSaveOnLocalStorage = () => {
  return useCallback(
    debounce((state: Node[]) => {
      const stateString = JSON.stringify(state)
      store.set(STORAGE_KEY, stateString)
    }),
    []
  )
}
