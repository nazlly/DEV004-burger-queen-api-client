export const fetchDB = (url, method, data) => {

    return fetch(`http://localhost:8080/${url}`, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then( response => response.json())
  
  }