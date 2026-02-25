// Importing icons
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const CommentBox = () => {
  return (
    <div className="flex flex-col gap-3 w-60 p-3 bg-white rounded-md text-sm">
      <div className="flex justify-start items-center gap-2">
        <div className='w-8 h-8 border rounded-full overflow-hidden'>
          <img src='' />
        </div>

        <span>username</span>

        <span className="text-grey-500">2 days ago</span>
      </div>

      <p className="text-start text-grey-500">
        I couldn't agree more with this.
      </p>

      <div className="flex justify-between">
        <div className="py-1.5 rounded-md bg-[#F5F6FA]">
          <button className="px-3 text-purple-200">
            +
          </button>

          <span className="text-purple-600 font-medium">
            2
          </span>

          <button className="px-3 text-purple-200">
            -
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1 font-medium text-pink-400">
            <FaTrash size={12} />
            Delete
          </button>
          <button className="flex items-center gap-1 font-medium text-purple-600">
            <FaPencilAlt size={12} />
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentBox