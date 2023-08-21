import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({}, [rules.required()
    ]),
    email: schema.string({},[
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email'})
    ]),
    password: schema.string({}, [
      rules.required(),
      rules.minLength(4)
    ])
  })

   
  public messages: CustomMessages = {
    required: "O {{field}} é obrigatório!!!",
    'email.unique': "E-mail já cadastrado!!!",
    'minLength': "Senha muito pequena!!!"
  }
}
