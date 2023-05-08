const db = ``


const getAllSnacks = async () => {
    try {
        const allSnacks = `await db.any("SELECT * FROM snacks;")`
        return allSnacks;
    } catch (e) {
        return e
    }
}

const getASnack = async (id) => {
    try {
        const snack = `await db.one("SELECT * FROM snacks WHERE id=$1", id)`
        return snack;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAllSnacks,
    getASnack,
}