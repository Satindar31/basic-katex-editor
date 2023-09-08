"use client"

import { useEffect, useState } from "react";
import katex from 'katex'

export default function Input() {

  const [input, setInput] = useState(`\\begin{aligned}
&&a^2 - b^2 = (a-b)(a+b)\\\\
&&a^2 + 2ab + b^2 = (a+b)(a+b)
\\end{aligned}`)
  
  useEffect(() => {
    const displayArea = document.getElementById("display-area")
    if(displayArea == null) return
    else {
      katex.render(input, displayArea, {throwOnError: false, trust: false, displayMode: true, output: "mathml", })
    }
  }, [input])

  return (
    <div className="grid grid-cols-2 h-screen">
        <textarea className="h-screen gap-2 text-white bg-transparent border-slate-800 border rounded" value={input} onChange={(e) => setInput(e.target.value)}/>
        <span className="h-screen rounded w-auto border border-slate-800" id="display-area" />
    </div>
  )

}