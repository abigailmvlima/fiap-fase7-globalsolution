export default function handleError(error: any) {
  if (error?.response?.data) {
    const { message, error: errorMessage, data } = error.response.data;
    return message || errorMessage || data;
  } else if (typeof error === "string") {
    return error;
  } else if (error.message) {
    return error.message;
  } else {
    return "Erro no servidor.";
  }
}
