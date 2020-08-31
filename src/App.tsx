import React, { useMemo, useCallback } from 'react'
import { MainContainer, TopBar } from './layout'
import { ThemeManager } from './themes/ThemeManager'
import { ThemeToogle } from './components/ThemeToggle'
import { NotesContainer } from './layout'
import { Slate, Editable, withReact } from 'slate-react'
import { useAppState, useSaveOnLocalStorage } from './hooks/storageHooks'
import { createEditor } from 'slate'
import { Element } from './editor/Element'

function App() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useAppState()
  const save = useSaveOnLocalStorage()
  const onChange = useCallback(
    (next) => {
      setValue(next)
      save(next)
    },
    [setValue, save]
  )
  const renderElement = useCallback((props) => <Element {...props} />, [])
  return (
    <ThemeManager>
      <MainContainer>
        <TopBar>
          <ThemeToogle />
        </TopBar>
        <NotesContainer>
          <Slate editor={editor} value={value} onChange={onChange}>
            <Editable renderElement={renderElement} />
          </Slate>
        </NotesContainer>
      </MainContainer>
    </ThemeManager>
  )
}

export default App
