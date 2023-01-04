const express = require("express");
const {
    getUsersService,
    postUsersService,
    deleteUsersService,
    updateUsersService,
} = require("../Services/users.service");

const getUsersController = async (req, res) => {
    try {
        const query = req.query;
        console.log(query);
        
        
        
        const users = await getUsersService(query);
        console.log(users);
        if (users.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
};
const postUsersController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const users = await postUsersService(data);
        console.log(users);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteUsersController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await deleteUsersService(query);
        console.log(users);
        if (users.acknowledged && !users.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (users.acknowledged && users.deletedCount) {
            
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
const updateUsersController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const users = await updateUsersService(query, data);
        console.log(users);
        if (users.acknowledged && !users.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (users.matchedCount && users.modifiedCount) {
            
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
    getUsersController,
    postUsersController,
    deleteUsersController,
    updateUsersController,
};