import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({sucess:true, data: products});
        
    } catch (error) {
        console.error("Error in fetch: ", error.message);
        res.status(500).json({sucess:false , message:"Server Errror"});
        
    }
    
}

export const createProducts = async (req,res)=> {
    const product = req.body;
    if(!product.name || !product.price || !product.image)
    {
        return res.status(400).json({sucess:false , message:"Please provide complete information"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({sucess:true, data: newProduct});
    } catch (error) {
        console.error("Error in Product Creation: ", error);
        res.status(500).json({sucess:false , message:"Server Errror"})
        
    }
    
}

export const updatedProd = async (req, res) => {
  const { id } = req.params;
  const prod = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid product ID" });
  }

  try {
    const updatedProd = await Product.findByIdAndUpdate(id, prod, { new: true });

    if (!updatedProd) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProd });
  } catch (error) {
    console.error("Error in updating product:", error.message);
    res.status(500).json({ success: false, message: "Product not updated" });
  }
}

export const deleteProd = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid product ID" });
  }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess:true , message:"Product successfully deleted"})
    } catch (error) {
        console.error("Error in dele/:id error.message");
        res.status(500).json({sucess:false , message:"Server Error"})
        
    }

}