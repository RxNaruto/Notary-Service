const zod = require("zod");

const userSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8)
})

module.export ={
    userSchema
}