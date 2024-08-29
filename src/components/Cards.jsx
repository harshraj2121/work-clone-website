import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto mt-10 pt-10 flex gap-2'>
            <Card width={"basis-1/3"} heading1={"Up Next: News"} heading2={"Insights and behind the scenes"} start={false} para={true} hover={"hover:bg-zinc-600"}/>
            <Card width={"basis-2/3"} heading1={"Get In Touch"} heading2={"let's get to it, together"} start={true} para={false} hover={"hover:bg-violet-600"}/>
        </div>
    </div>
  )
}

export default Cards