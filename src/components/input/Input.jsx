import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setFilter } from '../../store/inputSLice'

const Input = () => {
  const data = useSelector((state)=>state.inputSlice.filter)
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text"
      onChange={(e)=> dispatch( setFilter(e.target.value))}
      value={data}
      
      
      />
    </div>
  )
}

export default Input
