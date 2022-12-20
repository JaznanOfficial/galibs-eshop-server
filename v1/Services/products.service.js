const Products = require("../Models/products.model");

const getProductsService = async (query) => {
    const { search,...more } = query;
    // Products.index({ name: "text", email: "text" })
    let searchFind;
    console.log(search);
    if (search) {
        console.log(searchFind);
        // const result = await Products.find({name:{$in:[search]}})
        const result = await Products.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Products.find(more);
    return result;
};
const postProductsService = async (data) => {
    const result = await Products.create(data);
    console.log(result);
    return result;
};

const deleteProductsService = async (query) => {
    const result = await Products.remove(query);
    console.log(result);
    return result;
};
const updateProductsService = async (query, data) => {
    const result = await Products.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getProductsService, postProductsService, deleteProductsService, updateProductsService };
