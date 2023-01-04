const express = require("express");
const {
    getCouponsService,
    postCouponsService,
    deleteCouponsService,
    updateCouponsService,
} = require("../Services/coupons.service");

const getCouponsController = async (req, res) => {
    try {
        const query = req.query;
        
        const coupons = await getCouponsService(query);

        if (coupons.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(coupons);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postCouponsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const coupons = await postCouponsService(data);
        console.log(coupons);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteCouponsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const coupons = await deleteCouponsService(query);
        console.log(coupons);
        if (coupons.acknowledged && !coupons.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (coupons.acknowledged && coupons.deletedCount) {
            
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
const updateCouponsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const Coupons = await updateCouponsService(query, data);
        console.log(Coupons);
        if (coupons.acknowledged && !coupons.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (coupons.matchedCount && coupons.modifiedCount) {
            
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
    getCouponsController,
    postCouponsController,
    deleteCouponsController,
    updateCouponsController,
};