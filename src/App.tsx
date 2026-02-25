import './App.css'

// Importing data.json
import data from '../data.json'
import CommentBox from './components/CommentBox'

function App() {
  // 'currentUser' avatar
  const julioAvatar = data.currentUser.image.png

  const commentsList = data.comments
  console.log(data.comments[1].replies)

  return (
    <>  
      {/* Comments */}
      <div className='mb-3 flex flex-col items-end gap-3'>
        {
          commentsList.map((comment) => (
            <CommentBox
              key={comment.id}
              avatar={comment.user.image.png}
              username={comment.user.username}
              date={comment.createdAt}
              comment={comment.content}
              score={comment.score}
              replies={comment.replies}
            />
          ))
        }
      </div>

      {/* Comments Input */}
      <div className='w-full p-3 bg-white rounded-lg'>
        <input
          type='text'
          placeholder='Add a comment...'
          className='w-full pb-14 flex items-start border border-grey-100 rounded-md px-5 py-2 placeholder:text-grey-500 placeholder:text-sm'
        />

        {/* Avatar and Send Button */}
        <div className='flex justify-between mt-5'>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <img src={`${julioAvatar}`} />
          </div>

          <button className='px-5 py-2 rounded-md bg-purple-600'>
            <span className='text-sm text-white'>SEND</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
