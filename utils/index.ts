export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}

export const normalizeResponse = (response: any) => {

  const isSuccess = response.status === "mail_sent";
  const message = response.message;
  const validationError = isSuccess
    ? {}
    : Object.fromEntries(
      response.invalid_fields.map((error: any) => {
        return [error.field, error.message];
      })
    );

  return {
    isSuccess,
    message,
    validationError
  };
};