import React, { FC } from 'react'
import ToDo from './to-do/components'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { FitnessCalculator } from './fitness-calculator'
import Links from './ links'

import 'antd/dist/antd.css'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Links />} />
        <Route path='/fitness-calculator' element={<FitnessCalculator />} />
        <Route path='/to-do' element={<ToDo />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
