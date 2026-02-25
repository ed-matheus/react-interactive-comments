import CommentBox from "./CommentBox"

interface RepliesListProps {
  replies: any[];
}

const RepliesList: React.FC<RepliesListProps> = ({ replies }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-end gap-3 mt-3 w-full border-l border-grey-100">
        {
          replies.map((reply) => (
            <div className="w-60">
              <CommentBox
                key={reply.id}
                avatar={reply.user.image.png}
                username={reply.user.username}
                date={reply.createdAt}
                comment={reply.content}
                score={reply.score}
                replyingTo={reply.replyingTo}
                replies={[]}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RepliesList