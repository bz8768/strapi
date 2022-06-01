'use strict';

const { yup, validateYupSchema } = require('@strapi/utils');

const callbackSchema = yup.object({
  identifier: yup.string().required(),
  password: yup.string().required(),
});

const registerSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

const sendEmailConfirmationSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
});

const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .required(),
  })
  .noUnknown();

const resetPasswordSchema = yup
  .object({
    password: yup.string().required(),
    passwordConfirmation: yup.string().required(),
    code: yup.string().required(),
  })
  .noUnknown();

module.exports = {
  validateCallbackBody: validateYupSchema(callbackSchema),
  validateRegisterBody: validateYupSchema(registerSchema),
  validateSendEmailConfirmationBody: validateYupSchema(sendEmailConfirmationSchema),
  validateForgotPasswordBody: validateYupSchema(forgotPasswordSchema),
  validateResetPasswordBody: validateYupSchema(resetPasswordSchema),
};
