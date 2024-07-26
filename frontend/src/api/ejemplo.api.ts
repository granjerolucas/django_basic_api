export const list = () => {
  return fetch('http://localhost:3000/api/ejemplo')
    .then(response => response.json())
    .then(data => data)
}