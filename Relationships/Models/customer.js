const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("Connection Successful"))
.catch((err) => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const orderSchema = new Schema({
    item: String,
    price: Number
})

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE MIDDLEWARE");
// })

customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders }});
        console.log(res);
    }
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Functions 
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

const addCust = async() => {
    let newCust = new Customer({
        name: "Karan Arjun",
    });

    let newOrder = new Order({
        item: "Pijja",
        price: 250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added a new customer");
};

const delCust = async() => {
    let data = await Customer.findByIdAndDelete();
    console.log(data);
};

// addCust();
delCust();

// const addCustomer = async() => {
//     // let cust1 = new Customer({
//     //     name: "Rahul Kumar"
//     // });

//     // let order1 = await Order.findOne({ item: "Samosa" });
//     // let order2 = await Order.findOne({ item: "Soke" });

//     // cust1.orders.push(order1);
//     // cust1.orders.push(order2);

//     // let result = await cust1.save();
//     // console.log(result);

//     let res = await Customer.find({});
//     console.log(res);
// }

// addCustomer();

// const addOrders = async() => {
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Soke", price: 20},
//         {item: "Bumberbola", price: 100}
//     ]);
//     console.log(res);
// }
// addOrders();