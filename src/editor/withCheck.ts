import { Editor, Range, Transforms, Path } from 'slate'
import { CustomElement, ElementType } from './interfaces'

export const withCheck = (editor: Editor) => {
  const { insertBreak: defaultInsertBreak } = editor
  editor.insertBreak = () => {
    defaultInsertBreak()
    const { selection } = editor
    if (selection) {
      const end = Range.end(selection)
      const parentNodeEntry = Editor.parent(editor, end)
      if (parentNodeEntry) {
        const [parent, path]: [CustomElement, Path] = parentNodeEntry
        if (parent.type === ElementType.Check) {
          Transforms.setNodes(editor, { checked: false }, { at: path })
        }
      }
    }
  }
  return editor
}
