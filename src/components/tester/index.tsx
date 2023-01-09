import React, { useState } from 'react'


const Tester = () => {

  const [isExpanded, setIsExpanded] = useState(false)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <section className="h-[800px] w-5/6 mt-24 flex justify-center items-center mx-auto">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 text-white py-2 px-5 rounded-lg">Click me</button>

        {isExpanded && (
          <div>
            <p onClick={() => setIsMenuExpanded(!isMenuExpanded)}>1st option</p>
            <p>2nd option</p>
            <p>3rd option</p>
          </div>
        )}

        {isMenuExpanded && (
          <div>
            <h1>HELLO WORLD I AM HERE</h1>
          </div>
        )}
    </section>
  )
}

export default Tester