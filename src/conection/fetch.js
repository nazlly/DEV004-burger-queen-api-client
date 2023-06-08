export const fetchDB = (url, method, data, token) => {

  return fetch(`http://localhost:8080/${url}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: method === "POST" ? JSON.stringify(data) : null
  })
  .then(response => response.json())
  .catch(error => error);
}