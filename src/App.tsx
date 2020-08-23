import React from 'react'
import { Container, TopBar } from "./layout";
import { ThemeManager } from "./themes/ThemeManager";
import { ThemeToogle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeManager>
      <Container>
        <TopBar>
          <ThemeToogle/>
        </TopBar>
      </Container>
    </ThemeManager>
  )
}

export default App
