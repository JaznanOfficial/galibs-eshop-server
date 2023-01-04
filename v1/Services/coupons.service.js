const Coupons = require("../Models/coupons.model");

const getCouponsService = async (query) => {
    const { search,...more } = query;
    let searchFind;
    console.log(typeof search);
    if (search) {
        console.log(searchFind);
        const result = await Coupons.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Coupons.find(more);
    return result;
};
const postCouponsService = async (data) => {
    const result = await Coupons.create(data);
    console.log(result);
    return result;
};

const deleteCouponsService = async (query) => {
    const result = await Coupons.remove(query);
    console.log(result);
    return result;
};
const updateCouponsService = async (query, data) => {
    const result = await Coupons.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getCouponsService, postCouponsService, deleteCouponsService, updateCouponsService };
