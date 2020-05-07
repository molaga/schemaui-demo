const express = require('express');
const mongoose = require('mongoose');
const SchemaUI = require('schemaui');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const Image = require('./models/image');
const Settings = require('./models/settings');
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

SchemaUI.init({});

SchemaUI.registerModel(Post, {
    listFields: ['title', 'shortContent']
});

SchemaUI.registerModel(Image, {
    listFields: ['title', 'type', 'isActive'],
    fields: {
        'description': {
            textarea: true
        }
    },
    permissions: {
        delete: false,
        create: false,
    }
});

SchemaUI.registerModel(Settings, {
    permissions: {
        delete: false,
        edit: false,
        create: false,
    }
});

app.use(bodyParser.json());
app.use('/schemaui', SchemaUI.middleware());

app.use('/', (request, response) => {
   response.redirect('/schemaui');
});

app.listen(port, () => console.log('App is running on port ' + port));