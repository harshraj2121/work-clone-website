import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between'>
        <div className='text-zinc-500 text-sm flex items-center justify-center gap-8'>{["Privacy Policy", "Cookie Policy", "Impressum", "Terms", "Webflow Agency"].map((items, index) => <p key={index}>{items}</p>)}</div>
        <div><img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" /></div>
    </div>
  )
}

export default Footer