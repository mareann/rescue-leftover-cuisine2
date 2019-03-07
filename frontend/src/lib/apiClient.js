import axios from "axios";

let baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000"

let apiClient = axios.create({
    baseURL: baseURL
});

// TODO: add methods to wrap API endpoints

let getRecipes = search => {
  let query = search ? "?search=" + search : "";
  return apiClient.get("api/v1/recipe" + query)
    .then(results => { return results.data })
    .catch(e => { return [] });
}; 

let createUser = data => {
  let request = new Request("api/v1/users", {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({user: data})
  })

  return fetch(request).then(response => {
    console.log(response.json())
    return response.json();
  }).catch(error => {
    return error;
  });
  //sends data to users controller ...
};


export default apiClient;
export { getRecipes, createUser };