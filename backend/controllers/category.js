const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in the database",
      });
    }
    req.category = category;
    next();
  });
};

//create
exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category did not saved in the database",
      });
    }
  return res.json({category});
  });
};

//read

// exports.getCategory = (req,res,id)=>{
//   Category.findById(id)
//   .exec((err,category)=>{
//     if(err){
//       return res.status(400).json({
//         error: `Category not found in the database`
//       });
//     }
//     return res.send(id);
//   })
// }

exports.getAllCategories = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Category did not found in the database",
      });
    }
    return res.json(categories);
  });
};

//update
exports.updateCategory = (req, res) => {
  // const category = req.category;
  // category.category_name = req.body.category_name;
  // category.save((err,category)=>{
  //   if(err){
  //     return res.status(400).json({
  //       error : "Unable to update category"
  //     })
  //   }
  //   res.json({category});
  // })
  
  //****************OR************************ */

  Category.updateOne({_id : req.category._id},{
    $set : {
      category_name : req.body.category_name
    }
  }).then(()=>{
    res.send("category updated successfully!")
  })
  .catch((err)=>res.send("category did not update"))
};

//deletion
exports.deleteCategory = (req,res)=>{
    Category.deleteOne({_id : req.category._id},(err=>{
        if(err){
            return res.status(400).json({
                error : "Category did not delete from database"
            })
        }
        return res.json({
            message : "Category deleted successfully!"
        })
    }))
}