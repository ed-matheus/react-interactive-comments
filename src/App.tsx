import './App.css'

// Importing data.json
import data from '../data.json'
import CommentBox from './components/CommentBox'

function App() {
  const julioAvatar = data.currentUser.image.png

  return (
    <>  
      {/* Comments */}
      <div className='border border-red-500 p-2'>
        <CommentBox />
      </div>

      {/* Comments Input */}
      <div className='w-full p-3 bg-white rounded-lg'>
        <input
          type='text'
          placeholder='Add a comment...'
          className='w-full pb-14 flex items-start border border-gray-300 rounded-md px-5 py-2 placeholder:text-gray-500 placeholder:text-sm'
        />

        {/* Avatar and Send Button */}
        <div className='flex justify-between mt-5'>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <img src={`${julioAvatar}`} />
          </div>

          <button className='px-5 py-2 rounded-md bg-[#5457B6]'>
            <span className='text-sm text-white'>SEND</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
