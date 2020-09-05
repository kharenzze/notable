import store from 'store2'
import { useState, useCallback } from 'react'
import { Node } from 'slate'
import debounce from 'lodash/debounce'
import { DEBOUNCED_SAVE_WAIT, STORAGE_KEY } from '../constants'
import { ElementType } from '../editor/elements/interfaces'

const getStateFromStorage: () => Node[] = () => {
  const state = store.get(STORAGE_KEY.STATE)
  if (state) {
    return JSON.parse(state)
  }
  return [
    {
      type: ElementType.Check,
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
      store.set(STORAGE_KEY.STATE, stateString)
    }, DEBOUNCED_SAVE_WAIT),
    []
  )
}
