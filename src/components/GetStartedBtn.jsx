import React from 'react'

function GetStartedBtn({text}) {
  return (
<button class="before:ease relative h-12 w-40 overflow-hidden border text-lg font-medium border-secondary bg-secondary text-primary shadow-2xl transition-all before:absolute 
      before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 rounded-md
       before:bg-white before:opacity-10 before:duration-700 hover:shadow-secondary hover:before:-translate-x-40">{text}</button>
)
}

export default GetStartedBtn