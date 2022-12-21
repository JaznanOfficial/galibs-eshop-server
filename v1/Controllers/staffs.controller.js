const express = require("express");
const {
    getStaffsService,
    postStaffsService,
    deleteStaffsService,
    updateStaffsService,
} = require("../Services/staffs.service");

const getStaffsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        
        
        
        
        const staffs = await getStaffsService(query);
        // console.log(staffs);
        if (staffs.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(staffs);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postStaffsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const staffs = await postStaffsService(data);
        console.log(staffs);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteStaffsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const staffs = await deleteStaffsService(query);
        console.log(staffs);
        if (staffs.acknowledged && !staffs.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (staffs.acknowledged && staffs.deletedCount) {
            
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
const updateStaffsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const staffs = await updateStaffsService(query, data);
        console.log(staffs);
        if (staffs.acknowledged && !staffs.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (staffs.matchedCount && staffs.modifiedCount) {
            
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
    getStaffsController,
    postStaffsController,
    deleteStaffsController,
    updateStaffsController,
};