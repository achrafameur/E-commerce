const Produit = require('../models/Produit')
const cloudinary = require('../server');
require('dotenv').config()


const addProduit = async (req,res)=>{
    try {
        const {name,quantity,price,description,image}=req.body
        const newProduit = new Produit({
            name,
            description,
            quantity,
            price
        })
        if (image) {
            const savedImage = await cloudinary.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "f3-dev"
            })
            newPost.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }
        const savedProduit =await newProduit.save()
        res.json(savedProduit)
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}


const deleteProduit = async (req,res) =>{
    try {
        const deletedProduit = await Produit.findByIdAndDelete(req.params.id)
        res.json(deletedProduit)
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}

const getAllProduits = async (req,res) =>{
    try {
        let limit = +req.query.limit
        let pageNumber = +req.query.page
        let documentCount = await Produit.find().countDocuments();
        let numberofpages = Math.ceil(documentCount/limit)
        if (pageNumber > numberofpages)
            pageNumber = numberofpages
        
        const produits = await Produit.find()
        // .select({ '__v': 0 })
        // .sort({ 'addedAt': -1 })
        // .populate({ path: 'name', select: "quantity price description" })
        // .skip((pageNumber - 1) * limit)
        // .limit(limit)
        res.json({ produits })
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}

const updateProduit = async (req,res) => {
    try {
        const updatedProduit = await Produit.findByIdAndUpdate(req.params.id, { ...req.body })
        res.json(updatedProduit)
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}


const getProduitsCount = async (req, res) => {
    try {
        const count = await Produit.find().countDocuments()
        res.json({ count })
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}

const delElement = async (req, res) => {
    try {
        // const produit = await Produit.findOne({_id:req.params.id});
        const updatedproduct = await Produit.updateOne({_id:req.params.id},{$unset: {name: ""} });
        res.json(updatedproduct)
    } catch (error) {
        res.status(500).json({errors:[{msg : error.message}]})
    }
}

module.exports = { addProduit,deleteProduit,getAllProduits,updateProduit,getProduitsCount,delElement }