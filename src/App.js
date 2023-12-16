// import './App.css';
// import React from 'react';
// import ReactDOM from "react-dom/client";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import ProductCards from './Cards/cards';

// function App() {
//   // return (
//   //   <div className="App">
//   //     <Router>
//   //     <Switch>
//   //       <Route path="/" element={<Register />} />
//   //       <Route path="/login" element={<Login />} exact />
//   //       {/* <ProductCards /> */}
//   //         <Route path="/products" element={<ProductCards />} ></Route>
//   //     </Switch>
//   //   </Router>
//   //    </div>
//   const pathname = window.location.pathname;

//   if (pathname === '/') {
//     return <Register />
//   } else if (pathname === '/products') {
//     return <ProductCards />;
//   }
//   else if(pathname === '/login'){
//     return <Login />;
//   }

//   // Handle other routes or display a 404 component if necessary
//   return <div>404 Not Found</div>;
// }

// //   );
// // }


// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import ProductCards from './Cards/cards';
import About from './Cards/About';
import Contact from './Cards/Contact';
import MyHTMLComponent from './Cards/anotherpage'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/products" component={ProductCards} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path='/final' component={MyHTMLComponent} />

      </Switch>
    </Router>
  );
}

export default App;
