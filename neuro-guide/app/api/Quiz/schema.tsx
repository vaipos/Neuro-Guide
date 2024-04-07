import {z} from "zod"

const schema = z.object({
    username: z.string(),
    id: z.number(),
    Question1: z.number(),
    Question2: z.number(),
    Question3: z.number(),
    Question4: z.number(),
    Question5: z.number(),
    Question6: z.number(),
    Question7: z.number(),
    Question8: z.number(),
    Diagnosis: z.number()
})

export default schema;