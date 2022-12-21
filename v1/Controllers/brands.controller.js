const express = require("express");
const {
    getBrandsService,
    postBrandsService,
    deleteBrandsService,
    updateBrandsService,
} = require("../Services/brands.service");

const getBrandsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        
        const brands = await getBrandsService(query);
        // console.log(brands);
        if (brands.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(brands);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postBrandsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const brands = await postBrandsService(data);
        console.log(brands);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteBrandsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const brands = await deleteBrandsService(query);
        console.log(brands);
        if (brands.acknowledged && !brands.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (brands.acknowledged && brands.deletedCount) {
            
            return res.status(200).json({
                status: "Successful",
                message: "Data deleted successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};
const updateBrandsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const brands = await updateBrandsService(query, data);
        console.log(brands);
        if (brands.acknowledged && !brands.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (brands.matchedCount && brands.modifiedCount) {
            
            return res.status(200).json({
                status: "Successful",
                message: "Data update successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    getBrandsController,
    postBrandsController,
    deleteBrandsController,
    updateBrandsController,
};