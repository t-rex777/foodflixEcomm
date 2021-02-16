const stripe = require("stripe")(
  "sk_test_51HDOecLemGPkteohLfe8W9hKxoNqP2DknHy8YoyaLGBREbx2ZwiY9x7wmOWFLsJ795cHqnNyqxU9KQaJinpgNkDk00AjeiDWX9"
);
const { v4: uuidv4 } = require("uuid");

exports.userPayment = (req, res) => {
  const { products, token } = req.body;

  const idempotencyKey = uuidv4(); //to avoid charging same user twice.
  let total = 0;
  products.map((pro) => {
    let subTotal = pro.price * pro.quantity;
    total = total + subTotal;
  });

  return stripe.customers
    .create({
      email: token.email,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: total * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: "FOOODSSSS",
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};
