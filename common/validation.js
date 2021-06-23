const Joi = require("joi");

module.exports.signupValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().email().trim().required(),
    password: Joi.string().min(8).max(16).trim().required(),
    accountType: Joi.string().valid("system").default("system"),
    profileType: Joi.string().valid("free", "premium").default("free"),
    accountStatus: Joi.string().valid("active", "inactive").default("inactive"),
    profileStatus: Joi.string()
      .valid("public", "private", "close")
      .default("public"),
    socialAuthorization: Joi.string().trim().default(null),
    fullName: Joi.string().trim().default(null).required(),
    youtubeAccount: Joi.string().trim().default(null),
    avatar: {
      path: Joi.string().trim(),
      alt: Joi.string().trim(),
      size: Joi.number().min(0),
      createdAt: Joi.date().default(new Date()),
      updatedAt: Joi.date().default(new Date()),
    },
    createdAt: Joi.date().default(new Date()),
    updatedAt: Joi.date().default(new Date()),
  });

  return schema.validate(data);
};

module.exports.signupSocialValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().default(null),
    username: Joi.string().email().trim().default(null),
    password: Joi.string().min(8).max(16).trim().default(null),
    accountType: Joi.string().valid("facebook", "google").default("google"),
    profileType: Joi.string().valid("free", "premium").default("free"),
    accountStatus: Joi.string().valid("active", "inactive").default("active"),
    profileStatus: Joi.string()
      .valid("public", "private", "close")
      .default("public"),
    socialAuthorization: Joi.string().trim().required(),
    fullName: Joi.string().trim().default(null).required(),
    youtubeAccount: Joi.string().trim().default(null),
    avatar: {
      path: Joi.string().trim(),
      alt: Joi.string().trim(),
      size: Joi.number().min(0),
      createdAt: Joi.date().default(new Date()),
      updatedAt: Joi.date().default(new Date()),
    },
    createdAt: Joi.date().default(new Date()),
    updatedAt: Joi.date().default(new Date()),
  });

  return schema.validate(data);
};

module.exports.signinSystemValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().email().trim().default(null),
    password: Joi.string().min(8).max(16).trim().default(null),
    accountType: Joi.string()
      .valid("facebook", "google", "system")
      .default("system")
      .required(),
    socialAuthorization: Joi.string().trim().default(null),
    accessToken: Joi.string().trim().default(null),
  });

  return schema.validate(data);
};

module.exports.changePasswordValidation = (data) => {
  const schema = Joi.object({
    oldPassword: Joi.string().min(8).max(16).trim().required().default(null),
    newPassword: Joi.string().min(8).max(16).trim().required().default(null),
  });

  return schema.validate(data);
};

module.exports.changeProfileValidation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().trim().default(null),
    youtubeAccount: Joi.string().trim().default(null),
  });

  return schema.validate(data);
};

module.exports.changeAvatarValidation = (data) => {
  const schema = Joi.object({
    avatar: {
      path: Joi.string().trim().required(),
      alt: Joi.string().trim().required(),
      size: Joi.number().min(0),
      createdAt: Joi.date().default(new Date()),
      updatedAt: Joi.date().default(new Date()),
    },
  });

  return schema.validate(data);
};

module.exports.createPlaylistValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().trim().required(),
    size: Joi.number().min(0),
    duration: Joi.number().min(0),
    type: Joi.number().min(0),
    status: Joi.number().min(0).default(11), //playlist_public
    thumbnail: {
      path: Joi.string().trim(),
      alt: Joi.string().trim(),
      size: Joi.number().min(0),
      createdAt: Joi.date().default(new Date()),
      updatedAt: Joi.date().default(new Date()),
    },
    createdAt: Joi.date().default(new Date()),
    updatedAt: Joi.date().default(new Date()),
  });

  return schema.validate(data);
};
