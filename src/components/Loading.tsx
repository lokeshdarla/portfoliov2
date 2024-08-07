import React from 'react'
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (

    <div role="status">
      <VscLoading color='blue' size={25} className='animate-spin' />
    </div>

  )
}

export default Loading
