export const createCookie = (name, value, days = 1) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
};

export const findCookie = (name) => {
  return document.cookie.split("; ").find((cookie) => cookie.startsWith(name));
};
