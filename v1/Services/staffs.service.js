const Staffs = require("../Models/staffs.model");

const getStaffsService = async (query) => {
    const { search,...more } = query;
    // Staffs.index({ name: "text", email: "text" })
    let searchFind;
    console.log(typeof search);
    if (search) {
        console.log(searchFind);
        // const result = await Staffs.find({name:{$in:[search]}})
        const result = await Staffs.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Staffs.find(more);
    return result;
};
const postStaffsService = async (data) => {
    const result = await Staffs.create(data);
    console.log(result);
    return result;
};

const deleteStaffsService = async (query) => {
    const result = await Staffs.remove(query);
    console.log(result);
    return result;
};
const updateStaffsService = async (query, data) => {
    const result = await Staffs.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getStaffsService, postStaffsService, deleteStaffsService, updateStaffsService };
