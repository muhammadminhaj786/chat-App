import React from 'react'
// import avatar from '../../assets/runescape-internet-bot-chatbot-avatar-clip-art-png-favpng-0fWQWr3tBQFRyKiiExWYvnt9d.jpg'
import avatar from '../../assets/la-avatar.png'
const Dashboard = () => {
  return (
    <div className='w-screen flex h-screen'>
        <div className='w-[25%] border border-green-600 h-screen'>
            <div className='border  border-b-black flex justify-center items-center'>
                <img className='w-[80px] h-[90px]' src={avatar} alt="" />
                <div className='ml-3' >
                    <p className='text-[16px]'>minhaj</p>
                    <p className='text-[16px]'>online</p>
                </div>
            </div>
        </div>
        <div className='w-[50%] border border-green-600 h-screen'></div>
        <div className='w-[25%] border border-green-600 h-screen'></div>
    </div>
  )
}

export default Dashboard