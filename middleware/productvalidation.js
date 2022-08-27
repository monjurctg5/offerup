const ProductValidation = (req, res, next) => {
  const {
    productName,
    title,
    sortTitle,
    price,
    description,
    condition,
    category,
    place,
   
  } = req.body;
  if(!productName) res.send("produt name can not be empty");
  else if(!title) res.send("title  can not be empty");
  else if(!sortTitle) res.send("sort title can not be empty");
  else if(!price) res.send("price can not be empty");
  else if(!description) res.send("description can not be empty"); 

//   else if(!image1 || !image2 || !image3 || !image4) res.send("You must added image ");
  else if(!condition) res.send("price can not be empty");

  else if(!category) res.send("category can not be empty");

  else if(!place) res.send("place can not be empty");
  else{
    next()
  }

};



module.exports =ProductValidation
