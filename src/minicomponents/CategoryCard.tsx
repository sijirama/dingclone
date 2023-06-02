import {ImPen} from "react-icons/im"
import {BsArrowUpRight} from "react-icons/bs"

export default function CategoryCard({icon , title}:any) {
  return (
    <div className="flex items-center justify-between m-2  md:w-60 shadow-lg rounded-lg p-3">
        <div className="flex items-center gap-1">
            {icon ? (icon) : (<ImPen/>) }
            <p className="font-rubik font-semibold">{title ? (title) : ("PlaceHolder Title")}</p>
        </div>

        <button className="bg-green-600 p-1 rounded-md">
            <BsArrowUpRight className="text-white" />
        </button>
    </div>
  )
}
