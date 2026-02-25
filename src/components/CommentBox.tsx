// Importing icons
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import RepliesList from "./RepliesList";
import { FaReply } from "react-icons/fa";

interface CommentBoxProps {
  avatar?: string;
  username?: string;
  date?: string;
  comment?: string;
  score?: number;
  replies: any[];
  replyingTo?: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({ avatar, username, date, comment, score, replies, replyingTo }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-3 bg-white rounded-md text-sm">
        <div className="flex justify-start items-center gap-3">
          <div className='w-6 h-6 rounded-full overflow-hidden'>
            <img src={avatar} />
          </div>

          <span>{username}</span>

          <span className="text-grey-500">{date}</span>
        </div>

        <p className="text-start text-grey-500">
          <span className="text-purple-600 font-medium">
            {replyingTo ? `@${replyingTo}` : ''}&nbsp;
          </span>
          {comment}
        </p>

        <div className="flex justify-between">
          <div className="py-1.5 rounded-md bg-[#F5F6FA]">
            <button className="px-3 text-purple-200">
              +
            </button>

            <span className="text-purple-600 font-medium">
              {score}
            </span>

            <button className="px-3 text-purple-200">
              -
            </button>
          </div>

          {
            username === 'juliusomo'
              ?
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
              :
            <button className="flex items-center gap-1 font-medium text-purple-600">
              <FaReply size={12} />
              Reply
            </button>
          }
        </div>
      </div>

      {/* Comment Replies */}
      {
        replies.length > 0 ? <RepliesList replies={replies} /> : ''
      }
    </div>
  )
}

export default CommentBox