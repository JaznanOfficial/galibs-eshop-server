const express = require("express");
const {
    getCartsService,
    postCartsService,
    deleteCartsService,
    updateCartsService,
} = require("../Services/carts.service");

const getCartsController = async (req, res) => {
    try {
        const query = req.query;

        const carts = await getCartsService(query);

        if (carts.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postCartsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const carts = await postCartsService(data);
        console.log(carts);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteCartsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const carts = await deleteCartsService(query);
        console.log(carts);
        if (carts.acknowledged && !carts.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (carts.acknowledged && carts.deletedCount) {
            
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
const updateCartsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const carts = await updateCartsService(query, data);
        console.log(Carts);
        if (carts.acknowledged && !carts.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (carts.matchedCount && carts.modifiedCount) {
            
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
    getCartsController,
    postCartsController,
    deleteCartsController,
    updateCartsController,
};