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

const updateSnack = async (id, snack) => {
    const { name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy } = snack;

    try {
        const updatedSnack = await db.one("UPDATE snacks SET name=$1, image=$2, calories=$3, fiber=$4, sodium=$5, sugar=$6, gluten_free=$7, flavor_profile=$8, is_healthy=$9 WHERE id=$10 RETURNING *", [name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy, id]);
        return updatedSnack;
    } catch (e) {
        return e
    }
}

const createSnack = async (snackToAdd) => {
    const { name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy } = snackToAdd
    try {
        const newSnack = await db.one("INSERT INTO snacks (name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, image, calories, fiber, sodium, sugar, gluten_free, flavor_profile, is_healthy])
        return newSnack
    } catch (e) {
        return e
    }
}

const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", id)
        return deletedSnack
    } catch (e) {
        return e
    }
}

module.exports = {
    getAllSnacks,
    getASnack,
    updateSnack,
    createSnack,
    deleteSnack
}