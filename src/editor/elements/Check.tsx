import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components/Checkbox'
import { CustomElement } from '../interfaces'
import { ReactEditor, useEditor } from 'slate-react'
import { Transforms } from 'slate'

const Container = styled.div.attrs({
  contentEditable: false,
})`
  display: flex;
  flex-direction: row;
`

const CheckText = styled.span`
  color: ${(p) => p.theme.colors.black};
`

export interface ICheckElement extends CustomElement {
  checked: boolean
}

interface ICheck {
  element: ICheckElement
}

const SCheckbox = styled(Checkbox)`
  margin: 6px 12px 0 0;
`

export const Check: FC<ICheck> = ({ children, element }) => {
  const editor = useEditor()
  const onClick = useCallback(() => {
    const path = ReactEditor.findPath(editor, element)
    const { checked } = element
    Transforms.setNodes(editor, { checked: !checked }, { at: path })
  }, [editor, element])
  return (
    <Container>
      <SCheckbox checked={element.checked} onClick={onClick} />
      <CheckText>{children}</CheckText>
    </Container>
  )
}
