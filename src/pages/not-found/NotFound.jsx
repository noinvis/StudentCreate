import { useNavigate } from 'react-router-dom'
import img from '../../assets/img/Group.png'
import { memo } from 'react'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-[2rem]'>
      <h1 className='text-[50px] text-[#ff8800]'>Oops!</h1>
      <p className='text-[24px] text-[#ff8800]'>You are lost</p>
      <img src={img} alt="" className='p'/>
      <div className="flex gap-[2rem]">
        <button onClick={() => navigate("/")} className="p-[10px] text-white bg-[#ff8800] rounded-[24px] hover:cursor-pointer border1 hover:bg-white hover:text-[#ff8800] duration-300">Go Home</button>
        <button onClick={() => navigate(-1)} className="p-[10px] text-white bg-[#ff8800] rounded-[24px] hover:cursor-pointer border1 hover:bg-white hover:text-[#ff8800] duration-300">Go back</button>
      </div>
    </div>
  )
}

export default memo(NotFound);