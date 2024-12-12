import { body } from "express-validator"


const loginRules = [
    body('email').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('mot_de_passe')
    .exists().withMessage('Le mot de passe est obligatoire')
    .isString()
    .isLength({ min: 8 }).withMessage('Au moins 8 caractères')
    .matches(/\d/).withMessage('Au moins un chiffre')
    .matches(/[a-z]/).withMessage('Au moins une lettre minuscule')
    .matches(/[A-Z]/).withMessage('Au moins une lettre majuscule')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Au moins un caractère spécial')
]

export default loginRules