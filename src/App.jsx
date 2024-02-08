//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

export default function App(){
  const post = {
    "body" : "Coping Skill for today is a deep breathing technique.",
    "id": "3",
    'author':'Jane Doe',
    'date': new Date('2021-09-15'),
    
  }
  return (
  <>
    <h1> Harmony Haven</h1>
    <h2>Anonymouse Mental Health Connections. Connect with those who understand and share similar struggles.</h2>
    <p>
      { post.author } ,<br />
      { post.body}
    </p>
    </>
  )
}