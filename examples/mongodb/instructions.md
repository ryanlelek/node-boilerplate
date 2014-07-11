
# MongoDB

## Mongoose

A module to help with creating Object-Document Models (ODM)

### Install Module

Add to package.json

    "mongoose" : "3.8.12"

or run

    $ npm install --save mongoose

### Create

#### Option #1

    model_user.create(json_document, function (error, user) {});

#### Option #2

    var user = new model_user(json_document);
    user.save(function (error, user) {});

### Read

#### Option #1

    model_user.find(json_object_query, json_object_projection, function (error, users) {});

#### Option #2

    model_user.findById(id_string, json_object_projection, function (error, user) {});

## Native MongoDB Driver

Coming Soon
