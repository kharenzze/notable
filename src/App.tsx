import React, { useState, useMemo, useCallback } from 'react'
import { MainContainer, TopBar } from "./layout";
import { ThemeManager } from "./themes/ThemeManager";
import { ThemeToogle } from "./components/ThemeToggle";
import { NotesContainer } from "./layout";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Node } from "slate";

function App() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Type here...' }],
    },
  ])
  const onChange = useCallback((next) => setValue(next), [])
  return (
    <ThemeManager>
      <MainContainer>
        <TopBar>
          <ThemeToogle/>
        </TopBar>
        <NotesContainer>
          <Slate editor={editor} value={value} onChange={onChange}>
            <Editable />
          </Slate>
        </NotesContainer>
      </MainContainer>
    </ThemeManager>
  )
}

export default App
