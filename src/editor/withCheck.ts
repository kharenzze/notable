import { Editor } from 'slate'

export const withCheck = (editor: Editor) => {
  const { insertBreak: defaultInsertBreak } = editor
  editor.insertBreak = () => {
    defaultInsertBreak()
  }
  return editor
}
