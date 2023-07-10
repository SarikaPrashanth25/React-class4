import React from 'react'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'

/* react hook => method -> dedicated to functional components, function, const arrow, const local*/
function App(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">React Hooks</h3>
         {/*<Ex1 />
         <Ex2 />  
         <Ex3 />*/}
         <Ex4 />
        </div>
      </div>
    </div>
  )
}
export default App
