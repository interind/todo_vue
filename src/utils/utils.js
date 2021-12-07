export function getResponse(res, message) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(message));
}

export function filterKeys(arg) {
  return Object.fromEntries(Object.entries(arg)
    .filter(([key, value]) => [key, value][1] !== ''));
}

export const url = '/';
