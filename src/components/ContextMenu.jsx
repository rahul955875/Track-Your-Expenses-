import React from 'react'

export default function ContextMenu({elementStyle, rowId}) {
  if(!elementStyle.left) return
  return (
    <div className="context-menu" style={elementStyle}>
      <div>Edit</div>
      <div onClick={()=> console.log(rowId)}>Delete</div>
    </div>
  )
}
