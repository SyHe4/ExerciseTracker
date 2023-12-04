const { ObjectId, connect } = require('./mongo');
const data = require("../data/posts.json");

const COLLECTION_NAME = 'posts';
async function getCollection(){
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(){
    const col = await getCollection();
    return col.find({}).toArray();
}

async function get(id){
    const col = await getCollection();
    return await col.findOne({ _id: ObjectId(id)});
}

async function getByType(type){
    const col = await getCollection();
    return await col.findOne({ type });
}

async function search(query){
    const col = await getCollection();
    const posts = await col.find({
        $or: [
            { title: { $regex: query, $options: 'i'}},
            { name: { $regex: query, $options: 'i'}},
        ],
    }).toArray();

    return posts;
}

async function create(post){
    const newPost = {
        id: data.posts.length + 1,
        ...post,
    };
    const col = await getCollection();
    const result = await col.insertOne(newPost);
    newPost._id = result.insertedId;

    return newPost;
}

async function update(post){
    const col = await getCollection();
    const result = await col.findOneAndUpdate(
        { _id: ObjectId(post.id) },
        { $set: post },
        { returnDocument: 'after' },
    );
    return result;
}

async function remove(id){
    const col = await getCollection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    if(result.deletedCount === 0){
        throw new Error('Post not found');
    }
}

module.exports = {
    getAll, get, getByType, search, create, update, remove, getCollection, COLLECTION_NAME
};