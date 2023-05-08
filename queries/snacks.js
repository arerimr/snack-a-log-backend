const db = require('../db/dbConfig')


const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks")
        return allSnacks;
    } catch (e) {
        return e
    }
}

const getASnack = async (id) => {
    try {
        const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id)
        return snack;
    } catch (e) {
        return e;
    }
}

const createSnack = async (snackToAdd) => {
    const { name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy } = snackToAdd
    try {
        const newSnack = await db.one("INSERT INTO snacks (name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy])
    } catch (e) {
        return e
    }
}

module.exports = {
    getAllSnacks,
    getASnack,
    createSnack
}