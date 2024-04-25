import { useEditor } from "tldraw";
import { FaRegHand } from "react-icons/fa6";
import { GrSelect } from "react-icons/gr";
import { RxPencil1 } from "react-icons/rx";

export default function CustomCanvasInterface() {

    const editor = useEditor()


    return (
        <div className="DingLayout">

            <div className="p-3 flex gap-4 rounded-lg w-fit bg-zinc-300">
                <button
                    className="DingItem cursor-pointer hover:bg-zinc-400"
                    onClick={() => editor.setCurrentTool('hand')}
                >
                    <FaRegHand className="text-2xl" />
                </button>

                <button
                    className="DingItem cursor-pointer hover:bg-zinc-400"
                    onClick={() => editor.setCurrentTool('select')}
                >
                    <GrSelect className="text-2xl" />
                </button>

                <button
                    className="DingItem cursor-pointer hover:bg-zinc-400"
                    onClick={() => editor.setCurrentTool('draw')}
                >
                    <RxPencil1 className="text-2xl" />
                </button>


            </div>

        </div>
    )
}

