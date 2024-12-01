export const Task=({value,handleCompleteBtn,handleDeleteBtn,completed})=>{
    return (
        <form className="w-full max-w-sm" style={{backgroundColor:completed&&"green"}}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            aria-label="Full name"
            readOnly
            value={value}
          />
          <button
            className="m-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleCompleteBtn}
            
          >
           Complete    
          </button>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleDeleteBtn}
          >
           Delete    
          </button>
        </div>
      </form>
    )

}