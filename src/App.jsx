import React from 'react'
import Section1 from './components/Section1/section1.jsx'
import Section2 from './components/Section2/section2.jsx'
const App = () => {
    const users=[
        {
            img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            intro:'',
            tag:'underbanked'},
        {
            img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            intro:'',
            tag:'Satisfied'},
        {
            img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            intro:'',
            tag:'Underserved'}
    ]
  return (
    <div className='app'>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
