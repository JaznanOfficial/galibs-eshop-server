const Orders = require("../Models/orders.model");

const getOrdersService = async (query) => {
    const { search,...more } = query;
    let searchFind;
    if (search) {
        const result = await Orders.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Orders.find(more);
    return result;
};
const postOrdersService = async (data) => {
    const result = await Orders.create(data);
    console.log(result);
    return result;
};

const deleteOrdersService = async (query) => {
    const result = await Orders.remove(query);
    console.log(result);
    return result;
};
const updateOrdersService = async (query, data) => {
    const result = await Orders.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getOrdersService, postOrdersService, deleteOrdersService, updateOrdersService };
