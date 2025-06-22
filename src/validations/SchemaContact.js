import { z } from "zod";
export const SchemaContact = () => z.object({
    name: z.string().min(5,{message:'El nombre debe tener al menos 5 letras'}).max(12,{message:'El nombre debe tener como máximo 12 letras'}),
    email: z.string().email({message:'El correo electrónico es incorrecto'}),
    textarea: z.string().min(15,{message:'El mensaje debe tener al menos 15 caracteres'})
});