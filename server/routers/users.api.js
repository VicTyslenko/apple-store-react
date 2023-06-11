const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require("uuid");

const User = require("../modules/users.mongoose");

router.post("/register", async (request, response) => {
	const { fullName, email, username, password } = request.body;

	const newUser = {
		fullName: fullName,
		email: email,
		username: username,
		password: password,
		tokenUser: uuidv4(),
	};

	const user = new User(newUser);

	try {
		await user.save();
		response.redirect("/product");
	} catch (error) {
		console.log(error);
	}
	// console.log('BE - register',request.body);
});

module.exports = router;
