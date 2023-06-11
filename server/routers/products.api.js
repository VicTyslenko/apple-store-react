const { Router } = require("express");
const router = Router();

const Product = require("../modules/product.mongoose");

router.get("/products", async (request, response) => {
	const { category } = request.query;

	const limit = request.query._limit;
	const page = request.query._page || 1;

	if (!category) {
		const productsAll = await Product.find()
			.skip((page - 1) * limit)
			.limit(limit);

		const count = await Product.find().countDocuments();

		response.status(200).json({
			success: true,
			data: productsAll,
			totalPages: Math.ceil(count / limit),
		});
	} else {
		const productsCategory = await Product.find({
			category: category,
		})
			.skip((page - 1) * limit)
			.limit(limit);

		const count = await Product.find({ category: category }).countDocuments();
		console.log(count);

		response.status(200).json({
			success: true,
			data: productsCategory,
			totalPages: Math.ceil(count / limit),
		});
	}
});

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

module.exports = router;
