const CommentBox = () => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-white rounded-md text-sm">
      <div className="flex justify-start items-center gap-2 border border-blue-500">
        <div className='w-8 h-8 border rounded-full overflow-hidden'>
          <img src='' />
        </div>

        <span>username</span>

        2 days ago
      </div>

      <p className="text-start">
        some comment text here...
      </p>

      <div className="flex justify-between border border-pink-800">
        <div>
          <button>
            +
          </button>
        </div>

        <div className="border">
          <button className="">
            Delete
          </button>
          <button>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentBox