const express = require("express");
const path = require("path");

// check if production or dev
if (process.env.NODE_ENV !== "production") require("dotenv").config();
// stripe object used to make charges
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enabling cors for stripe api for payments
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

// amount is calculated on server side to prevent amount from being manipulated on client side
const calculateOrderAmount = items => {
	if (items !== {}) {
		return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
	} else {
		return;
	}
};

app.post("/payment", async (req, res) => {
	const items = req.body;
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(items),
		currency: "sgd",
		automatic_payment_methods: {
			enabled: true
		}
	});
	res.send({ clientSecret: paymentIntent.client_secret });
});

app.listen(port, err => {
	if (err) throw err;
	console.log(`----- SERVER STARTED ON PORT ${port} -----`);
});
