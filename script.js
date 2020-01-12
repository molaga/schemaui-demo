const mongoose = require('mongoose');
const Post = require('./models/post');
const data = require('../../Downloads/MOCK_DATA.json');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async () => {
    try {
        await Post.insertMany(data);

        let i=0;
    } catch (e) {
        let o=e;
    }
})();