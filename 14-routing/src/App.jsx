/***************************************************************************************************************************** createBrowserRouter, RouterProvider ********************************* ******************************path, element, children, loader ************************************ *************************Nested routes => Outlet (parent component) ****************************** *************************************************************************************************/
                                  
// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { lazy, Suspense} from 'react';
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Navbar from './components/Navbar'
// import UseParamsEx from './components/UseParamsEx'
// const LazyLoad = lazy(() => import('./components/LazyLoad'));
// import './App.css'

// //loader 
// async function homeLoader() {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   const users = await response.json();

//   return users;
// }

// const router = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element : <div>
//         <Navbar/>
//         <Home/>
//       </div>,
//       loader: homeLoader
//     },
//     {
//       path:'/about',
//       element : <div>
//         <Navbar/>
//         <About/>
//       </div>,
//     },
//     {
//       path:'/contact',
//       element : <div>
//         <Navbar/>
//         <Contact/>
//       </div>
//     },
//     {
//       path:'/student/:id',
//       element : <div>
//         <Navbar/>
//         <UseParamsEx/>
//       </div>
//     },
//     {
//       path:'/lazyload',
//       element:<div>
//         <Navbar/>
//         <LazyLoad/>
//       </div>
//     }
//   ]
// )


// function App() {
  

//   return (
//     <>
//     <RouterProvider router={router}/>
    
//     </>
//   )
// }

// export default App


/************************************************************************************************************************************ BrowserRouter, Routes, Route ********************************* ********************************** path, element, children, loader ******************************* *************************Nested routes => Outlet (parent component) ****************************** *************************************************************************************************/

import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
const LazyLoad = lazy(() => import('./components/LazyLoad'));


const App = ()=>{
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route> 
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path="/lazyload" element={<Suspense fallback={<h2>Loading...</h2>}>
          <LazyLoad />
        </Suspense>}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App