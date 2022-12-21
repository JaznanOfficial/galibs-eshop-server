const Users = require("../Models/users.model");

const getUsersService = async (query) => {
    const { search } = query;
    // Users.index({ name: "text", email: "text" })
    let searchFind;
    console.log(typeof search);
    if (search) {
        searchFind = { "name": { $in: [search] } };
        console.log(searchFind);
        // const result = await Users.find({ name: { $in: [ search ] } })
        const result = await Users.find({ $text: { $search: search } });
        console.log(result);
        return result;
    }
    const result = await Users.find({})
    // console.log(result);

    return await result
    // const result = await Users.find( {});
};
const postUsersService = async (data) => {
    const result = await Users.create(data);
    console.log(result);
    return result;
};

const deleteUsersService = async (query) => {
    const result = await Users.remove(query);
    console.log(result);
    return result;
};
const updateUsersService = async (query, data) => {
    const result = await Users.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getUsersService, postUsersService, deleteUsersService, updateUsersService };
