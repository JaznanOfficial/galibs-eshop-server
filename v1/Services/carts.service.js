const Carts = require("../Models/carts.model");

const getCartsService = async (query) => {
    const { search,...more } = query;
    let searchFind;
    console.log(typeof search);
    if (search) {
        console.log(searchFind);
        const result = await Carts.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Carts.find(more);
    return result;
};
const postCartsService = async (data) => {
    const result = await Carts.create(data);
    console.log(result);
    return result;
};

const deleteCartsService = async (query) => {
    const result = await Carts.remove(query);
    console.log(result);
    return result;
};
const updateCartsService = async (query, data) => {
    const result = await Carts.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getCartsService, postCartsService, deleteCartsService, updateCartsService };
