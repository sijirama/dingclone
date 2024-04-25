import { useEditor } from 'tldraw'
import React from 'react'

export default function EditorHotkeys() {

    const editor = useEditor()

    React.useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Delete':
                case 'Backspace': {
                    editor.deleteShapes(editor.getSelectedShapeIds())
                    break
                }
                case 'v': {
                    editor.setCurrentTool('select')
                    break
                }
                case 'e': {
                    editor.setCurrentTool('eraser')
                    break
                }
                case 'x':
                case 'p':
                case 'b':
                case 'd': {
                    editor.setCurrentTool('draw')
                    break
                }

                case 'h':{
                    editor.setCurrentTool("hand")
                    break
                }
            }
        }

        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    return (
        null
    )
}
