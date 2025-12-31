import Joi from "joi";

export const signupSchema = Joi.object({
  fullName: Joi.string().min(3).required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must include uppercase, lowercase, number, and special character"
    })
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string().required()
});
