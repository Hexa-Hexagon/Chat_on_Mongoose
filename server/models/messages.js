const { Schema, model } = require('mongoose');

const messagesSchema = new Schema({
        text: {
            type: String,
            required: true,
            min: 1,
            max: 1024
        },
    }, {
        timestamps: Date
    }

);

const Message = model('Message', messagesSchema);

module.exports = Message;