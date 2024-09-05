import { FabricObject } from "fabric";
import { FabricJSEditor } from "fabricjs-react";
import { FaClone, FaTrash, FaMagic, FaEraser } from "react-icons/fa";
import { RiFlipHorizontalFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { EditorModes } from "../App";

interface ObjectMenuProps {
    x: number;
    y: number;
    selectedObject: FabricObject | null,
    editor: FabricJSEditor | undefined;
    menuPosition: { x: number, y: number } | null,
    setMenuPosition: (x: any) => void
    setEditorMode:(mode:EditorModes) => void
}

export const ObjectMenu: React.FC<ObjectMenuProps> = ({ x, y, selectedObject, editor, setMenuPosition, setEditorMode }) => {

    // const canvasRef = useRef(null);
    // const thresholdRef = useRef(0);
    // const [segmentationMode, setSegmentationMode] = useState(false);


    const handleDelete = () => {
        if (selectedObject && editor) {
            editor?.canvas.remove(selectedObject);
            editor.canvas.discardActiveObject()
            editor.canvas.requestRenderAll();
            setMenuPosition(null);
        }
    };

    const handleDuplicate = () => {
        if (selectedObject && editor) {
            selectedObject.clone().then((cloned) => {
                editor.canvas.discardActiveObject()
                cloned.set({
                    left: selectedObject.left + 10,
                    top: selectedObject.top + 10,
                });
                editor.canvas.add(cloned);
                editor.canvas.setActiveObject(cloned);
                editor.canvas.requestRenderAll();
            })
        }
    };

    const flipHorizontally = () => { }
    const EraserMode = () => {
        setEditorMode("eraser")
    }

    return (
        <div
            className="absolute flex items-center bg-white border border-gray-200 shadow-lg p-2 rounded"
            style={{ top: y, left: x }}
        >
            <button
                onClick={handleDuplicate}
                className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
                title="Segment"
            >
                <FaMagic className="text-gray-600" />
            </button>

            <button
                onClick={EraserMode}
                className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
                title="Eraser"
            >
                <FaEraser className="text-gray-600" />
            </button>


            <button
                onClick={flipHorizontally}
                className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
                title="Flip Horizontally"
            >
                <RiFlipHorizontalFill className="text-gray-600" />
            </button>



            <button
                onClick={handleDuplicate}
                className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
                title="Duplicate"
            >
                <FaClone className="text-gray-600" />
            </button>
            <button
                onClick={handleDelete}
                className="flex items-center justify-center w-8 h-8 bg-gray-100 border border-gray-300 rounded-full hover:bg-red-300"
                title="Delete"
            >
                <FaTrash className="text-gray-600 " />
            </button>
        </div>);
};


