const express = require("express");
const {
    getOrdersService,
    postOrdersService,
    deleteOrdersService,
    updateOrdersService,
} = require("../Services/orders.service");

const getOrdersController = async (req, res) => {
    try {
        const query = req.query;

        const orders = await getOrdersService(query);

        if (orders.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postOrdersController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const orders = await postOrdersService(data);
        console.log(orders);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteOrdersController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const orders = await deleteOrdersService(query);
        console.log(Orders);
        if (orders.acknowledged && !orders.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (orders.acknowledged && orders.deletedCount) {
            
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
const updateOrdersController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const orders = await updateOrdersService(query, data);
        console.log(Orders);
        if (orders.acknowledged && !orders.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (orders.matchedCount && orders.modifiedCount) {
            
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
    getOrdersController,
    postOrdersController,
    deleteOrdersController,
    updateOrdersController,
};