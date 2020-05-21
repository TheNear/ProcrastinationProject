const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 15;
const MIN_PASSWORD_LENGTH = 6;

// eslint-disable-next-line import/prefer-default-export
export const regFormValid = (values) => {
  const errors = {};

  if (
    values.username.length < MIN_NAME_LENGTH ||
    values.username.length > MAX_NAME_LENGTH
  ) {
    errors.username = `Вы ввели слишком короткое, или слишком длинное имя. Минимум ${MIN_NAME_LENGTH} символа, максимум ${MAX_NAME_LENGTH} символов`;
  }

  if (!emailRegExp.test(values.email)) {
    errors.email = "Не корректно введён e-mail адрес";
  }

  if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Слишком короткий пароль. Минимальная длинна ${MIN_PASSWORD_LENGTH}`;
  }

  if (values.password !== values.password_repeat) {
    errors.password = `Пароли не совпадают`;
  }

  return errors;
};
