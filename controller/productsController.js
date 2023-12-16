// controllers/productsController.js

const axios = require('axios');

const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;


    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFilters = async (req, res) => {

  try {
    // const price = parseFloat(req.body.price)
    // const rating = parseFloat(req.body.rating)

    const price = parseFloat(req.query.price);
    const rating = parseFloat(req.query.rating);
    const category = req.query.category

    let priceFilterd = []
    let ratingFilter = []
    let ratingAndPriceFilter = []
    let filteredCategory = []
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    if(data && rating && price ){
      data.map(item => {

        if(item.rating.rate >= rating && item.price <= price )
        {
          ratingAndPriceFilter.push(item)
          // console.log("priceFilterd",priceFilterd);
          return(ratingAndPriceFilter)
        }
      })
    }
    if(data && price){ 
    data.map(item => {

      if(item.price <= price)
      {
        priceFilterd.push(item)
        // console.log("priceFilterd",priceFilterd);
        return(priceFilterd)
      }
    })
    }
    if(data && rating){
      data.map(item => {

        if(item.rating.rate >= rating)
        {
          ratingFilter.push(item)
          // console.log("priceFilterd",priceFilterd);
          return(ratingFilter)
        }
      })
    }
    if(data && category){
      // category
      data.map(item => {
      //  filteredCategory = item.filter((item) => item.category === category);
      if(item.category == category)
      {
        filteredCategory.push(item)
        // console.log("priceFilterd",priceFilterd);
        return(filteredCategory)
      }
      })
    }
    res.json({
      priceFilterd : priceFilterd,
      ratingFilter : ratingFilter,
      ratingAndPriceFilter : ratingAndPriceFilter,
      category : filteredCategory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const getFilters = async (req, res) => {
//   try {


//     // Your existing filtering logic here...

//     res.json({
//       priceFilterd: priceFilterd,
//       ratingFilter: ratingFilter,
//       ratingAndPriceFilter: ratingAndPriceFilter,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


module.exports = {
  getProducts,
  getFilters
};