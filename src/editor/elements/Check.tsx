import React, { forwardRef, ForwardRefRenderFunction, useCallback } from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components/Checkbox'
import { CustomElement } from '../interfaces'
import { ReactEditor, useEditor } from 'slate-react'
import { Transforms } from 'slate'
import { DefaultThemedStyledProps } from '../../themes/themes'

const Container = styled.div.attrs({
  contentEditable: false,
})`
  display: flex;
  flex-direction: row;
`

interface ICheckText {
  checked: boolean
}

const getTextDecoration = (p: DefaultThemedStyledProps<ICheckText>) =>
  p.checked ? 'line-through' : 'none'

const CheckText = styled.span`
  color: ${(p) => p.theme.colors.black};
  text-decoration: ${getTextDecoration};
`

export interface ICheckElement extends CustomElement {
  checked: boolean
}

interface ICheck {
  element: ICheckElement
}

const SCheckbox = styled(Checkbox)`
  margin: 3px 12px 0 0;
`

const Check_: ForwardRefRenderFunction<HTMLDivElement, ICheck> = (
  { children, element, ...rest },
  ref
) => {
  const editor = useEditor()
  const onClick = useCallback(() => {
    const path = ReactEditor.findPath(editor, element)
    const { checked } = element
    Transforms.setNodes(editor, { checked: !checked }, { at: path })
  }, [editor, element])
  const { checked } = element
  return (
    <Container>
      <SCheckbox checked={checked} onClick={onClick} />
      <CheckText checked={checked} ref={ref}>
        {children}
      </CheckText>
    </Container>
  )
}

export const Check = forwardRef(Check_)
