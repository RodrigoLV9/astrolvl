import { z } from "zod";
export const SchemaForm = () => z.object({
    name: z.string().min(5,'El nombre debe tener al menos 5 letras').max(12,'El nombre debe tener como máximo 12 letras'),
    email: z.string().email('El correo electrónico es incorrecto'),
    message: z.string().min(15, 'El mensaje debe tener al menos 15 caracteres')
});