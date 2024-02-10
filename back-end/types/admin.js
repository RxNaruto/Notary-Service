const zod = require("zod");

const adminSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8)
})

module.exports ={
    adminSchema
}