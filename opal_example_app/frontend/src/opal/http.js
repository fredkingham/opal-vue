

let BASE_URL = '/api/v0.1/'

class Http{
  getUrl(modelName, id){
    return BASE_URL + modelName + "/" + id + "/"
  }
  getOne(modelName, id) {
    return fetch(this.getUrl(modelName, id)).then(function(response) {
      return response.json();
    })
  }
}

export default Http

