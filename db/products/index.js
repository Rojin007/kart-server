
const crud = require("../crud");



const addproduct = async(add_product) =>{

    let products = await crud.insertData("products", addproduct);
    console.log("product added successfully1")
    return{data:"Added Successfully"}
}



const listproducts = async() =>{

let listofproducts = await crud.selectData('products');
console.log(listofproducts);
return listofproducts;

}


const searchproducts = async(data) =>{
    try{

       let searchdata = await crud.selectData('products', {
           filteringConditions: [
               ['product_name', 'LIKE', "%"+data.product_name+"%"]
            
           ]
        
       })
       // console.log(searchdata);
       return searchdata;
    }catch{
        
        return{data:"Somthing went worng"}
    }
}


const rateproduct = async(data) =>{

    let rating_product = await crud.insertData("product_rating", data);
    return{data:"Product rated successfully"}

}

const categories = async() =>{

    let listcategories = await crud.selectData('category');
    // console.log(listcategories);
    return listcategories;
    
    }

const delete_product = async(data) =>{
    const result = await crud.deleteData('products',{
        filteringConditions:[
            ['product_id',data]
        ]
    })
    return{data:"Deleted Successfully"}
}



module.exports ={addproduct, listproducts , searchproducts , rateproduct , categories,delete_product}