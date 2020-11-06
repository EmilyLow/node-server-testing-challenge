exports.seed = async function(knex) {
	await knex("testData").truncate()
	await knex("testData").insert([
		{ name: "test1" },
		{ name: "test2" },
		{ name: "test3" },
    { name: "test4" },
    { name: "test5" },
	])
}