


const getAllSnacks = async () => {
    try {
        const allSnacks = `await db.any("SELECT * FROM snacks;")`
        return allSnacks;
    } catch (e) {
        return e
    }
}

module.exports = {
    getAllSnacks,
}