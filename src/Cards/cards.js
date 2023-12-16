// // // // src/Card.js

// // // import React, { useState, useEffect } from 'react';
// // // import Rating from '@mui/material/Rating';
// // // import Card from '@mui/material/Card';
// // // import Button from '@mui/material/Button';
// // // import Modal from '@mui/material/Modal';
// // // import Box from '@mui/material/Box';
// // // import List from '@mui/material/List';
// // // import { styled, alpha } from '@mui/material/styles';
// // // import Menu from '@mui/material/Menu';
// // // import MenuItem from '@mui/material/MenuItem';
// // // import EditIcon from '@mui/icons-material/Edit';
// // // import Divider from '@mui/material/Divider';
// // // import ArchiveIcon from '@mui/icons-material/Archive';
// // // import FileCopyIcon from '@mui/icons-material/FileCopy';
// // // import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// // // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // // import SendIcon from '@mui/icons-material/Send';
// // // import { Abc } from '@mui/icons-material';

// // // const style = {
// // //   position: 'absolute',
// // //   top: '50%',
// // //   left: '50%',
// // //   transform: 'translate(-50%, -50%)',
// // //   width: 400,
// // //   bgcolor: 'background.paper',
// // //   border: '2px solid #000',
// // //   boxShadow: 24,
// // //   pt: 2,
// // //   px: 4,
// // //   pb: 3,
// // // };

// // // const StyledMenu = styled((props) => (
// // //   <Menu
// // //     elevation={0}
// // //     anchorOrigin={{
// // //       vertical: 'bottom',
// // //       horizontal: 'right',
// // //     }}
// // //     transformOrigin={{
// // //       vertical: 'top',
// // //       horizontal: 'right',
// // //     }}
// // //     {...props}
// // //   />
// // // ))(({ theme }) => ({
// // //   '& .MuiPaper-root': {
// // //     borderRadius: 6,
// // //     marginTop: theme.spacing(1),
// // //     minWidth: 180,
// // //     color:
// // //       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
// // //     boxShadow:
// // //       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
// // //     '& .MuiMenu-list': {
// // //       padding: '4px 0',
// // //     },
// // //     '& .MuiMenuItem-root': {
// // //       '& .MuiSvgIcon-root': {
// // //         fontSize: 18,
// // //         color: theme.palette.text.secondary,
// // //         marginRight: theme.spacing(1.5),
// // //       },
// // //       '&:active': {
// // //         backgroundColor: alpha(
// // //           theme.palette.primary.main,
// // //           theme.palette.action.selectedOpacity,
// // //         ),
// // //       },
// // //     },
// // //   },
// // // }));

// // // const ProductCards = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [totalPrice, setTotalPrice] = useState(0);
// // //   const [cartOpen, setCartOpen] = useState(false);
// // //   const [categorys, setCategory] = useState("Not Available")
// // //   const [selectedCategory,setSelectedCategory] = useState(null)
// // //   const [anchorEl, setAnchorEl] = React.useState(null);
// // //   const open = Boolean(anchorEl);

// // //   const handleClick = (event) => {
// // //     setAnchorEl(event.currentTarget);
// // //     const unique = [...new Set(products.map(item => item.category))]
// // //     setCategory(unique)
// // //   };
// // //   const handleClose = () => {
// // //     setAnchorEl(null);
// // //   };

// // //   const openCart = () => {
// // //     setCartOpen(true);
// // //   };

// // //   const closeCart = () => {
// // //     setCartOpen(false);
// // //   };

// // //   const handleCategorySelection = (category) => {
// // //     // setSelectedCategory(category);
// // //     // // Optionally, you can filter the products here based on the selected category
// // //     // const filteredProducts = products.filter((product) => product.category === category);
// // //     // setProducts(filteredProducts);
// // //     // const priceElement = document.getElementById("priceFilterInput").value;
// // //     // console.log("priceElement", priceElement);
// // //     // console.log("filter by Price");
  
// // //     fetch(`${url}api/getFilters?category=${category}`)
// // //       .then((response) => response.json())
// // //       .then((data) => setProducts(data.category))
// // //       .catch((error) => console.error('Error fetching data:', error));
// // //   };




// // // const url = "http://localhost:3004/"

// // //   useEffect(() => {
// // //     // Fetch data from the API
// // //     fetch(`${url}api/products`)
// // //       .then((response) => response.json())
// // //       .then((data) => setProducts(data))
// // //       .catch((error) => console.error('Error fetching data:', error));
// // //   }, []);


// // //   function handleFilterByPrice() {
// // //     const priceElement = document.getElementById("priceFilterInput").value;
// // //     console.log("priceElement", priceElement);
// // //     console.log("filter by Price");
  
// // //     fetch(`${url}api/getFilters?price=${priceElement}`)
// // //       .then((response) => response.json())
// // //       .then((data) => setProducts(data.priceFilterd))
// // //       .catch((error) => console.error('Error fetching data:', error));
// // //   }

// // //   function handleFilterByRating() {
// // //     const ratingElement = document.getElementById("ratingFilterInput").value;
// // //     console.log("ratingElement", ratingElement);
// // //     console.log("filter by Rating");
  
// // //     fetch(`${url}api/getFilters?rating=${ratingElement}`)
// // //       .then((response) => response.json())
// // //       .then((data) => setProducts(data.ratingFilter))
// // //       .catch((error) => console.error('Error fetching data:', error));
// // //   }


// // //   const addToCart = (product) => {
// // //     // Create a copy of the current cart
// // //     const newCart = [...cart];
// // //     // Check if the product already exists in the cart
// // //     const existingProductIndex = newCart.findIndex((item) => item.id === product.id);
  
// // //     if (existingProductIndex !== -1) {
// // //       // If the product exists, update its quantity
// // //       newCart[existingProductIndex].quantity += 1;
// // //     } else {
// // //       // If the product doesn't exist, add it to the cart with quantity 1
// // //       newCart.push({ ...product, quantity: 1 });
// // //     }  
// // //     // Update the cart state
// // //     setCart(newCart);
// // //     console.log(newCart)
// // //     // Calculate the new total price by iterating through the cart
// // //     const newTotalPrice = newCart.reduce((total, item) => {
// // //       return total + item.price * item.quantity;
// // //     }, 0);
  
// // //     setTotalPrice(newTotalPrice);
// // //   };
  

  

// // //   return (
// // //     <div className="App">
// // //       <h1>Product Cards</h1>
// // //       <Button onClick={openCart}>Open Cart</Button>
// // //       <div>
// // //         <button onClick={handleFilterByPrice}> Filter By Price</button>
// // //         <input id='priceFilterInput'>

// // //         </input>
// // //         <button onClick={handleFilterByRating}> Filter By Rating</button>
// // //         <input id='ratingFilterInput'>
// // //         </input>
// // //       </div>
// // //       <div>
// // //       <Button
// // //         id="demo-customized-button"
// // //         aria-controls={open ? 'demo-customized-menu' : undefined}
// // //         aria-haspopup="true"
// // //         aria-expanded={open ? 'true' : undefined}
// // //         variant="contained"
// // //         disableElevation
// // //         onClick={handleClick}
// // //         endIcon={<KeyboardArrowDownIcon />}
// // //       >
// // //         Category
// // //       </Button>
// // //       {categorys !== null && categorys !==undefined && categorys !== "Not Available" ?
// // //       <StyledMenu
// // //         id="demo-customized-menu"
// // //         MenuListProps={{
// // //           'aria-labelledby': 'demo-customized-button',
// // //         }}
// // //         anchorEl={anchorEl}
// // //         open={open}
// // //         onClose={handleClose}
// // //       >
// // //           {categorys !== null && categorys !== undefined && categorys !== "Not Available"
// // //           ? categorys.map((category) => (
  
// // //         <MenuItem 
// // //         // onClick={handleCategorySelection(category)
         
// // //         onClick={() => handleCategorySelection(category)}
// // //         disableRipple>
// // //           {/* <FileCopyIcon /> */}
// // //           <SendIcon fontSize="small" />
// // //           {category}
// // //         </MenuItem>
// // //         ))
// // //         :null}
// // //       </StyledMenu>
// // //       :null
// // //       }
// // //     </div>
// // //       <div className="card-container mx-64 my-24" 

// // //      style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(4, 1fr)', /* 4 items per row */
// // //       gap: '16px', /* Adjust the gap between cards */
// // //     }}
// // //       >
// // //         {products.map((product) => (
// // //           <Card 
// // //           sx={{
// // //             display: 'flex',
// // //             flexDirection: 'column', 
// // //           }}
// // //           >
// // //           <div className="card" key={product.id} >
// // //             <img height={"100px"} width={"100px"} src={product.image} alt={product.title} />
// // //             <h2>{product.title}</h2>
// // //             <p>Price: ${product.price}</p>
// // //             <Rating name="read-only" value={product.rating.rate} readOnly />
// // //             <p>{product.description}</p>
// // //             <button onClick={() => addToCart(product)}>Add to Cart</button>
// // //           </div>
// // //           </Card>
// // //         ))}
// // //       </div>

// // //     <Modal
// // //     open={cartOpen}
// // //     onClose={closeCart}
// // //     aria-labelledby="modal-modal-title"
// // //     aria-describedby="model-modal-description"
// // //   >
// // //     <Box sx={{ ...style ,width: 400 }}>
// // //        <List>
// // //          <div>
// // //              <h2>Shopping Cart</h2>
// // //              <ul>
// // //               {cart.map((item, index) => (
// // //                 <li key={index}>{item.title} 
// // //                 <ul>
// // //                   <li>
// // //                   Price - Only ${item.price}
// // //                   </li>
// // //                   <li>
// // //                   Quantity - {item.quantity !== null && item.quantity !== undefined ? item.quantity : 1}
// // //                   </li>
// // //                 </ul>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p>Total Price: ${totalPrice}</p>
// // //         </div>
// // //       </List>
// // //     </Box>
// // //   </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCards;



// // import React, { useState, useEffect } from 'react';
// // import Rating from '@mui/material/Rating';
// // import Card from '@mui/material/Card';
// // import Button from '@mui/material/Button';
// // import Modal from '@mui/material/Modal';
// // import Box from '@mui/material/Box';
// // import List from '@mui/material/List';
// // import { styled, alpha } from '@mui/material/styles';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import SendIcon from '@mui/icons-material/Send';

// // const StyledMenu = styled((props) => (
// //   <Menu
// //     elevation={0}
// //     anchorOrigin={{
// //       vertical: 'bottom',
// //       horizontal: 'right',
// //     }}
// //     transformOrigin={{
// //       vertical: 'top',
// //       horizontal: 'right',
// //     }}
// //     {...props}
// //   />
// // ))(({ theme }) => ({
// //   // Customize your menu styles here
// //   // ...
// // }));

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'background.paper',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   pt: 2,
// //   px: 4,
// //   pb: 3,
// // };

// // const cardStyle = {
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// //   padding: '16px',
// //   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
// //   borderRadius: '8px',
// // };

// // const productImageStyle = {
// //   width: '100%',
// //   height: 'auto',
// //   marginBottom: '16px',
// // };

// // const buttonStyle = {
// //   marginTop: '16px',
// // };

// // const ProductCards = () => {
// //   const [products, setProducts] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [cartOpen, setCartOpen] = useState(false);
// //   const [categorys, setCategory] = useState("Not Available")
// //   const [selectedCategory,setSelectedCategory] = useState(null)
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //     const unique = [...new Set(products.map(item => item.category))]
// //     setCategory(unique)
// //   };
  
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const openCart = () => {
// //     setCartOpen(true);
// //   };

// //   const closeCart = () => {
// //     setCartOpen(false);
// //   };

// //   const handleCategorySelection = (category) => {
// //     fetch(`${url}api/getFilters?category=${category}`)
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data.category))
// //       .catch((error) => console.error('Error fetching data:', error));
// //   };

// //   const url = "http://localhost:3004/"

// //   useEffect(() => {
// //     fetch(`${url}api/products`)
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data))
// //       .catch((error) => console.error('Error fetching data:', error));
// //   }, []);

// //   function handleFilterByPrice() {
// //     const priceElement = document.getElementById("priceFilterInput").value;
// //     fetch(`${url}api/getFilters?price=${priceElement}`)
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data.priceFilterd))
// //       .catch((error) => console.error('Error fetching data:', error));
// //   }

// //   function handleFilterByRating() {
// //     const ratingElement = document.getElementById("ratingFilterInput").value;
// //     fetch(`${url}api/getFilters?rating=${ratingElement}`)
// //       .then((response) => response.json())
// //       .then((data) => setProducts(data.ratingFilter))
// //       .catch((error) => console.error('Error fetching data:', error));
// //   }

// //   const addToCart = (product) => {
// //     const newCart = [...cart];
// //     const existingProductIndex = newCart.findIndex((item) => item.id === product.id);

// //     if (existingProductIndex !== -1) {
// //       newCart[existingProductIndex].quantity += 1;
// //     } else {
// //       newCart.push({ ...product, quantity: 1 });
// //     }

// //     setCart(newCart);

// //     const newTotalPrice = newCart.reduce((total, item) => {
// //       return total + item.price * item.quantity;
// //     }, 0);

// //     setTotalPrice(newTotalPrice);
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Product Cards</h1>
// //       <Button onClick={openCart}>Open Cart</Button>
// //       <div>
// //         <button onClick={handleFilterByPrice}> Filter By Price</button>
// //         <input id='priceFilterInput'></input>
// //         <button onClick={handleFilterByRating}> Filter By Rating</button>
// //         <input id='ratingFilterInput'></input>
// //       </div>
// //       <div>
// //         <Button
// //           id="demo-customized-button"
// //           aria-controls={open ? 'demo-customized-menu' : undefined}
// //           aria-haspopup="true"
// //           aria-expanded={open ? 'true' : undefined}
// //           variant="contained"
// //           disableElevation
// //           onClick={handleClick}
// //           endIcon={<KeyboardArrowDownIcon />}
// //         >
// //           Category
// //         </Button>
// //         {categorys !== null && categorys !==undefined && categorys !== "Not Available" ?
// //         <StyledMenu
// //           id="demo-customized-menu"
// //           MenuListProps={{
// //             'aria-labelledby': 'demo-customized-button',
// //           }}
// //           anchorEl={anchorEl}
// //           open={open}
// //           onClose={handleClose}
// //         >
// //             {categorys !== null && categorys !== undefined && categorys !== "Not Available"
// //             ? categorys.map((category) => (
        
// //           <MenuItem 
// //             onClick={() => handleCategorySelection(category)}
// //             disableRipple
// //           >
// //             <SendIcon fontSize="small" />
// //             {category}
// //           </MenuItem>
// //           ))
// //           :null}
// //         </StyledMenu>
// //         :null
// //         }
// //       </div>
// //       <div
// //         className="card-container mx-64 my-24"
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(4, 1fr)',
// //           gap: '16px',
// //         }}
// //       >
// //         {products.map((product) => (
// //           <Card sx={cardStyle}>
// //             <img
// //               style={productImageStyle}
// //               src={product.image}
// //               alt={product.title}
// //             />
// //             <h2>{product.title}</h2>
// //             <p>Price: ${product.price}</p>
// //             <Rating name="read-only" value={product.rating.rate} readOnly />
// //             <p>{product.description}</p>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               style={buttonStyle}
// //               onClick={() => addToCart(product)}
// //             >
// //               Add to Cart
// //             </Button>
// //           </Card>
// //         ))}
// //       </div>

// //       <Modal
// //         open={cartOpen}
// //         onClose={closeCart}
// //         aria-labelledby="modal-modal-title"
// //         aria-describedby="model-modal-description"
// //       >
// //         <Box sx={{ ...style, width: 400 }}>
// //           <List>
// //             <div>
// //               <h2>Shopping Cart</h2>
// //               <ul>
// //                 {cart.map((item, index) => (
// //                   <li key={index}>
// //                     {item.title}
// //                     <ul>
// //                       <li>Price - Only ${item.price}</li>
// //                       <li>Quantity - {item.quantity !== null && item.quantity !== undefined ? item.quantity : 1}</li>
// //                     </ul>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <p>Total Price: ${totalPrice}</p>
// //             </div>
// //           </List>
// //         </Box>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default ProductCards;





// import React, { useState, useEffect } from 'react';
// import Rating from '@mui/material/Rating';
// import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import { styled } from '@mui/material/styles';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SendIcon from '@mui/icons-material/Send';


// const headerStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '16px',
//   backgroundColor: '#333',
//   color: '#fff',
// };

// const titleStyle = {
//   fontSize: '24px',
//   fontWeight: 'bold',
//   margin: 0,
// };

// const buttonStyle = {
//   backgroundColor: '#FF5722', // Change the color to your preference
//   color: '#fff',
//   marginLeft: '16px',
// };

// const filterContainerStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   marginLeft: '16px', // Add left margin to separate from buttons
// };

// const filterButtonStyle = {
//   backgroundColor: '#2196F3', // Change the color to your preference
//   color: '#fff',
//   marginLeft: '8px', // Adjust margin as needed
// };

// const filterInputStyle = {
//   marginLeft: '8px',
//   marginRight: '8px',
//   padding: '4px',
//   border: '1px solid #ccc',
//   borderRadius: '4px',
// };

// const style = { // Define style here
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: '8px',
//     marginTop: theme.spacing(1),
//     minWidth: '180px',
//     color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: '18px',
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:hover': {
//         backgroundColor: 'rgba(0, 0, 0, 0.1)',
//       },
//     },
//   },
// }));

// const cardStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '16px',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//   borderRadius: '8px',
// };

// const productImageStyle = {
//   width: '100%',
//   height: 'auto',
//   marginBottom: '16px',
// };



// const ProductCards = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [categorys, setCategory] = useState("Not Available");
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     const unique = [...new Set(products.map(item => item.category))]
//     setCategory(unique)
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const openCart = () => {
//     setCartOpen(true);
//   };

//   const closeCart = () => {
//     setCartOpen(false);
//   };

//   const handleCategorySelection = (category) => {
//     fetch(`http://localhost:3004/api/getFilters?category=${category}`)
//       .then((response) => response.json())
//       .then((data) => setProducts(data.category))
//       .catch((error) => console.error('Error fetching data:', error));
//   };

//   useEffect(() => {
//     fetch('http://localhost:3004/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   function handleFilterByPrice() {
//     const priceElement = document.getElementById("priceFilterInput").value;
//     fetch(`http://localhost:3004/api/getFilters?price=${priceElement}`)
//       .then((response) => response.json())
//       .then((data) => setProducts(data.priceFilterd))
//       .catch((error) => console.error('Error fetching data:', error));
//   }

//   function handleFilterByRating() {
//     const ratingElement = document.getElementById("ratingFilterInput").value;
//     fetch(`http://localhost:3004/api/getFilters?rating=${ratingElement}`)
//       .then((response) => response.json())
//       .then((data) => setProducts(data.ratingFilter))
//       .catch((error) => console.error('Error fetching data:', error));
//   }

//   const addToCart = (product) => {
//     const newCart = [...cart];
//     const existingProductIndex = newCart.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       newCart[existingProductIndex].quantity += 1;
//     } else {
//       newCart.push({ ...product, quantity: 1 });
//     }

//     setCart(newCart);

//     const newTotalPrice = newCart.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     setTotalPrice(newTotalPrice);
//   };

//   return (
//     <div className="App">
//  <header style={headerStyle}>
//         <h1 style={titleStyle}>Product Cards</h1>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Button onClick={openCart} variant="contained" style={buttonStyle}>
//             Open Cart
//           </Button>
//           <div style={filterContainerStyle}>
//             <button onClick={handleFilterByPrice} style={filterButtonStyle}>
//               Filter By Price
//             </button>
//             <input id='priceFilterInput' style={filterInputStyle}></input>
//             <button onClick={handleFilterByRating} style={filterButtonStyle}>
//               Filter By Rating
//             </button>
//             <input id='ratingFilterInput' style={filterInputStyle}></input>
//           </div>
//           <Button
//             id="demo-customized-button"
//             aria-controls={open ? 'demo-customized-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             variant="contained"
//             disableElevation
//             onClick={handleClick}
//             endIcon={<KeyboardArrowDownIcon />}
//             style={filterButtonStyle}
//           >
//             Category
//           </Button>
//           {categorys !== null && categorys !== undefined && categorys !== "Not Available" ?
//             <StyledMenu
//               id="demo-customized-menu"
//               MenuListProps={{
//                 'aria-labelledby': 'demo-customized-button',
//               }}
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//             >
//               {categorys !== null && categorys !== undefined && categorys !== "Not Available"
//                 ? categorys.map((category) => (
//                   <MenuItem
//                     onClick={() => handleCategorySelection(category)}
//                     disableRipple
//                   >
//                     <SendIcon fontSize="small" />
//                     {category}
//                   </MenuItem>
//                 ))
//                 : null}
//             </StyledMenu>
//             : null
//           }
//         </div>
//       </header>
      // <div
      //   className="card-container mx-64 my-24"
      //   style={{
      //     display: 'grid',
      //     gridTemplateColumns: 'repeat(4, 1fr)',
      //     gap: '16px',
      //   }}
      // >
      //   {products.map((product) => (
      //     <Card sx={cardStyle}>
      //       <img
      //         style={productImageStyle}
      //         src={product.image}
      //         alt={product.title}
      //       />
      //       <h2>{product.title}</h2>
      //       <p>Price: ${product.price}</p>
      //       <Rating name="read-only" value={product.rating.rate} readOnly />
      //       <p>{product.description}</p>
      //       <Button
      //         variant="contained"
      //         color="primary"
      //         style={buttonStyle}
      //         onClick={() => addToCart(product)}
      //       >
      //         Add to Cart
      //       </Button>
      //     </Card>
      //   ))}
      // </div>

      // <Modal
      //   open={cartOpen}
      //   onClose={closeCart}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="model-modal-description"
      // >
      //   <Box sx={{ ...style, width: 400 }}>
      //     <List>
      //       <div>
      //         <h2>Shopping Cart</h2>
      //         <ul>
      //           {cart.map((item, index) => (
      //             <li key={index}>
      //               {item.title}
      //               <ul>
      //                 <li>Price - Only ${item.price}</li>
      //                 <li>Quantity - {item.quantity !== null && item.quantity !== undefined ? item.quantity : 1}</li>
      //               </ul>
      //             </li>
      //           ))}
      //         </ul>
      //         <p>Total Price: ${totalPrice}</p>
      //       </div>
      //     </List>
      //   </Box>
      // </Modal>
//     </div>
//   );
// };

// export default ProductCards;
























import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import Shopping Cart Icon
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Header from './Header'
import StickyFooter from './Footer'
import AlertDialogSlide from '../Payments/PaymentIntegration'; // Import the AlertDialogSlide component





const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  padding: '16px',
  outline: 'none',
};

const cartTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
};

const totalPriceStyle = {
  marginTop: '16px',
  textAlign: 'right',
  fontSize: '18px',
};


const filterButtonStyle = {
  marginLeft: '16px',
  backgroundColor: '#FF5722',
  color: '#fff',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  marginLeft: '8px',
  marginRight: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#333',
  color: '#fff',
  marginTop: '0px'
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const buttonStyle = {
  backgroundColor: '#FF5722',
  color: '#fff',
  marginLeft: '16px',
  display: 'flex',
  alignItems: 'center',
};

const badgeStyle = {
  backgroundColor: '#2196F3',
  color: '#fff',
  borderRadius: '50%',
  minWidth: '20px',
  padding: '4px',
  marginLeft: '4px',
  fontSize: '12px',
  textAlign: 'center',
};

const filterContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  // Customize your menu styles here
  // ...
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
};

const productImageStyle = {
  width: '100%',
  height: 'auto',
  marginBottom: '16px',
};

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [categorys, setCategory] = useState("Not Available")
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [cartCount, setCartCount] = useState(0); // State for cart count
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);


  // ...

  const addToCart = (product) => {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      newCart[existingProductIndex].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);

    const newTotalPrice = newCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);

    // Update cart count and show success message
    setCartCount(newCart.length);
    setSuccessMessage(`${product.title} added to cart!`);
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  useEffect(() => {
    // Fetch data from the API
    fetch(`${url}api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function handleFilterByPrice() {
    const priceElement = document.getElementById("priceFilterInput").value;
    fetch(`${url}api/getFilters?price=${priceElement}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.priceFilterd))
      .catch((error) => console.error('Error fetching data:', error));
  }

  function handleFilterByRating() {
    const ratingElement = document.getElementById("ratingFilterInput").value;
    fetch(`${url}api/getFilters?rating=${ratingElement}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.ratingFilter))
      .catch((error) => console.error('Error fetching data:', error));
  }

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    const unique = [...new Set(products.map(item => item.category))]
    setCategory(unique)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelection = (category) => {
    fetch(`${url}api/getFilters?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.category))
      .catch((error) => console.error('Error fetching data:', error));
  };

  
  // const handleCheckout = () => {

  // }
  const handleCheckout = () => {
    setCheckoutDialogOpen(true);
  };
  


  const url = "http://localhost:3004/";

  return (
    <div className="App">
      <>
      <Header />
      </>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Product Cards</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={openCart} variant="contained" style={buttonStyle}>
            <ShoppingCartIcon /> Open Cart{' '}
            {cartCount > 0 && (
              <span style={badgeStyle}>{cartCount}</span>
            )}
          </Button>
 
<div style={filterContainerStyle}>
  <button onClick={handleFilterByPrice} style={filterButtonStyle}>
    Filter By Price
    <IconButton color="inherit" style={{ marginLeft: '8px' }}>
      <FilterListIcon />
    </IconButton>
  </button>
  <TextField
    id="priceFilterInput"
    label="Price"
    variant="outlined"
    size="small"
    style={inputStyle}
  />
  <button onClick={handleFilterByRating} style={filterButtonStyle}>
    Filter By Rating
    <IconButton color="inherit" style={{ marginLeft: '8px' }}>
      <StarIcon />
    </IconButton>
  </button>
  <TextField
    id="ratingFilterInput"
    label="Rating"
    variant="outlined"
    size="small"
    style={inputStyle}
  />
</div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            style={filterButtonStyle}
          >
            Category
          </Button>
          {categorys !== null && categorys !== undefined && categorys !== "Not Available" ?
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {categorys !== null && categorys !== undefined && categorys !== "Not Available"
                ? categorys.map((category) => (
                  <MenuItem
                    onClick={() => handleCategorySelection(category)}
                    disableRipple
                  >
                    <SendIcon fontSize="small" />
                    {category}
                  </MenuItem>
                ))
                : null}
            </StyledMenu>
            : null
          }
        </div>
      </header>
      {successMessage && (
        <div
          style={{
            backgroundColor: 'green',
            color: '#fff',
            padding: '8px',
            textAlign: 'center',
          }}
        >
          {successMessage}
        </div>
      )}

<div
        className="card-container mx-64 my-24"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {products.map((product) => (
          <Card sx={cardStyle}>
            <img
              style={productImageStyle}
              src={product.image}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <Rating name="read-only" value={product.rating.rate} readOnly />
            <p>{product.description}</p>
            <Button
              variant="contained"
              color="primary"
              style={buttonStyle}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      <Modal
  open={cartOpen}
  onClose={closeCart}
  aria-labelledby="modal-modal-title"
  aria-describedby="model-modal-description"
>
  <Box sx={modalStyle}>
    <Typography sx={cartTitleStyle} variant="h6">
      <ShoppingCartIcon fontSize="inherit" style={{ marginRight: '8px' }} />
      Shopping Cart
    </Typography>
    <List>
      {cart.map((item, index) => (
        <div key={index}>
          <ListItem style={listItemStyle}>
            <ListItemText
              primary={item.title}
              secondary={`Price - Only $${item.price}`}
            />
            <Typography variant="body2">
              Quantity - {item.quantity !== null && item.quantity !== undefined ? item.quantity : 1}
            </Typography>
          </ListItem>
          {index < cart.length - 1 && <Divider />}
        </div>
      ))}
    </List>
    <Typography sx={totalPriceStyle}>
      Total Price: ${totalPrice}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={handleCheckout} // Add your checkout handling function here
      sx={{ marginTop: '16px' }} // Adjust the margin as needed
    >
      Proceed to Checkout
    </Button>
  </Box>
</Modal>
{checkoutDialogOpen && <AlertDialogSlide open={checkoutDialogOpen} onClose={() => setCheckoutDialogOpen(false)} cart={cart}/>}
<StickyFooter />
      </div>
  );
};

export default ProductCards;
