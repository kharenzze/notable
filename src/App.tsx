import React from 'react'
import { MainContainer, TopBar } from "./layout";
import { ThemeManager } from "./themes/ThemeManager";
import { ThemeToogle } from "./components/ThemeToggle";
import { NotesContainer } from "./layout";

function App() {
  return (
    <ThemeManager>
      <MainContainer>
        <TopBar>
          <ThemeToogle/>
        </TopBar>
        <NotesContainer>

        </NotesContainer>
      </MainContainer>
    </ThemeManager>
  )
}

export default App
