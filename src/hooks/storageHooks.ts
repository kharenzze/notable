import debounce from 'lodash/debounce'
import store from 'store2'
import { useState, useCallback } from 'react'
import { Node } from 'slate'
import { DEBOUNCED_SAVE_WAIT, STORAGE_KEY } from '../constants'
import { ElementType } from '../editor/interfaces'

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

type SaveType = (state: Node[]) => void

export const useSaveOnLocalStorage = () => {
  const [saving, setSaving] = useState(false)
  const debouncedSaving = useCallback(
    debounce((state: Node[]) => {
      const stateString = JSON.stringify(state)
      store.set(STORAGE_KEY.STATE, stateString)
      setSaving(false)
    }, DEBOUNCED_SAVE_WAIT),
    [setSaving]
  )
  const save: SaveType = useCallback(
    (state) => {
      setSaving(true)
      debouncedSaving(state)
    },
    [setSaving, debouncedSaving]
  )

  const flush = useCallback(() => {
    debouncedSaving.flush()
  }, [debouncedSaving])

  return {
    save,
    saving,
    flush,
  }
}
