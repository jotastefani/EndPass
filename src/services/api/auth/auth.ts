export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '',
        name: '',
        email: '',
      });
    }, 2000);
  });
}