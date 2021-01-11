export function onError(error) {
  let message = error.toString();

  // Authentication error messages
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }
  alert(message);
}
