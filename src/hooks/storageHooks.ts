import store from 'store2'
import { useState } from 'react'
import { Node } from 'slate'

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
