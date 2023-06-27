import { z } from "zod"

const schema = z
  .object({
    email: z.string().email({ message: "Email nije validan" }),
    password: z
      .string()
      .min(4, { message: "Sifra mora biti dugacka najmanje 4 karaktera" })
      .regex(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,}).*$"), {
        message: "Sifra mora sadrzati veliko slovo, malo slovo i broj",
      }),
  })

  export type FormData = z.infer<typeof schema>;

  export default schema;