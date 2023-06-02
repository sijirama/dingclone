import {ImPen} from "react-icons/im"
import {BsArrowUpRight} from "react-icons/bs"

export default function CategoryCard() {
  return (
    <div className="flex items-center justify-between m-2  md:w-60 shadow-lg rounded-lg p-3">
        <div className="flex items-center gap-1">
            <ImPen />
            <p className="font-rubik font-semibold">Design</p>
        </div>

        <button className="bg-green-400 p-1 rounded-md">
            <BsArrowUpRight className="text-white" />
        </button>
    </div>
  )
}
