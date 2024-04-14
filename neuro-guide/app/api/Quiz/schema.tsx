import {z} from "zod"

const schema = z.object({
    question1: z.number().min(1),
    question2: z.number().min(1),
    question3: z.number().min(1),
    question4: z.number().min(1),
    question5: z.number().min(1),
    question6: z.number().min(1),
    question7: z.number().min(1),
    question8: z.number().min(1)
})

export default schema;