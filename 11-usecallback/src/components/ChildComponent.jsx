import React from 'react'

const ChildComponent = React.memo(({ count }) => {
  return(
    <div>
      <button>Child component : {count}</button>
    </div>
  )
})
export default ChildComponent;