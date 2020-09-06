import React, { useMemo, useCallback } from 'react'
import compose from 'lodash/flowRight'
import { MainContainer } from './layout'
import { ThemeManager } from './themes/ThemeManager'
import { NotesContainer } from './layout'
import { Slate, Editable, withReact } from 'slate-react'
import { useAppState, useSaveOnLocalStorage } from './hooks/storageHooks'
import { createEditor } from 'slate'
import { Element } from './editor/Element'
import { TopBar } from './AppTopBar'
import { withCheck } from './editor/withCheck'

const create = compose([withCheck, withReact, createEditor])

const useEditor = () => useMemo(() => create(), [])

function App() {
  const editor = useEditor()
  const [value, setValue] = useAppState()
  const { save, saving, flush } = useSaveOnLocalStorage()
  const onChange = useCallback(
    (next) => {
      setValue(next)
      save(next)
    },
    [setValue, save]
  )
  const onBlur = useCallback(() => {
    flush()
  }, [flush])
  const renderElement = useCallback((props) => <Element {...props} />, [])
  return (
    <ThemeManager>
      <MainContainer>
        <TopBar saving={saving} />
        <NotesContainer>
          <Slate editor={editor} value={value} onChange={onChange}>
            <Editable
              renderElement={renderElement}
              autoFocus
              spellCheck
              onBlur={onBlur}
            />
          </Slate>
        </NotesContainer>
      </MainContainer>
    </ThemeManager>
  )
}

export default App
