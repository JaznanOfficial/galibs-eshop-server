const Brands = require("../Models/brands.model");

const getBrandsService = async (query) => {
    const { search, ...more } = query;
    // Brands.index({ name: "text", email: "text" })
    let searchFind;
    console.log(search);
    if (search) {
        console.log(searchFind);
        // const result = await Brands.find({name:{$in:[search]}})
        const result = await Brands.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Brands.find(more);
    return result;
};
const postBrandsService = async (data) => {
    const result = await Brands.create(data);
    console.log(result);
    return result;
};

const deleteBrandsService = async (query) => {
    const result = await Brands.remove(query);
    console.log(result);
    return result;
};
const updateBrandsService = async (query, data) => {
    const result = await Brands.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getBrandsService, postBrandsService, deleteBrandsService, updateBrandsService };
