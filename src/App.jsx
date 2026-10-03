import React,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index,setIndex] = useState([1])

  const getData= async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
    
  }
  
  useEffect(function(){
    getData()
  },[index])
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
       <div className=' flex flex-wrap gap-4'>
        { userData.length ==0 ? (
          <h2 className='text-gray-300 text-xs absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 font-semibold'> Loading...</h2>
        ):(
          userData.map((elem) => (
            <div key={elem.id}>
              <a href={elem.url} target='_blank'> 
             <div  className='h-40 w-44 overflow-auto rounded-xl '>
              <img 
               className='h-full w-full object-cover'
               src={elem.download_url} alt=''/>
               
             </div>
             <h2 className='font-bold text-lg'>{elem.author}</h2>
             </a>
            
            </div>
          )
          
        )
        )
      }
       </div>
       <div className='gap-6 flex justify-center items-center p-4 '>
              <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black 
               px-4 py-2 rounded font-semibold ' onClick={()=>{
                if(index>1){
                  setIndex(index-1)
                  setUserData([])
                }
               }}>previous</button>
               <h4>paged {index}</h4>
              <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black 
               px-4 py-2 rounded font-semibold ' onClick={()=>{
                
                  setIndex(index+1)
                  setUserData([])
            
               }}>Next</button>
             </div>
    </div>
  )
}

export default App 