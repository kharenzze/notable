import React from 'react'
import { Container, TopBar } from "./layout";
import { ThemeManager } from "./themes/ThemeManager";

function App() {
  return (
    <ThemeManager>
      <Container>
        <TopBar>

        </TopBar>
      </Container>
    </ThemeManager>
  )
}

export default App
