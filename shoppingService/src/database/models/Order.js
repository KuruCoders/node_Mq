const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    amount: Number,
    status: String,
    txnId: String,
    items: [
        {   
            product: {
                _id: { type:String,require:true},
                name: { type:String,require:true},
                desc: { type:String,require:true},
                banner: { type:String,require:true},
                type: { type:String,require:true},
                unit: { type:Number,require:true},
                price: { type:Number,require:true},
                supplier: { type:String,require:true},
            } ,
            unit: { type: Number, require: true} 
        }
    ]
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('order', OrderSchema);