let BASE_URL = '/api/v0.1/'


class Http{
  static getCookie() {
    var name = "XSRF-TOKEN"
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  static getHeaders(){
    return new Headers({
        'X-XSRF-TOKEN': this.getCookie(),
        'Content-Type': 'application/json'
    });
  }

  static get(someUrl){
    return fetch(someUrl).then(function(response) {
      if(response.status === 401){
        alert('you need to log in dude')
      }
      return response.json();
    })
  }
  static getUrl(modelName, id){
    if(id){
      return BASE_URL + modelName + "/" + id + "/";
    }
    return BASE_URL + modelName + "/";
  }
  static getOne(modelName, id) {
    let url = this.getUrl(modelName, id);
    return this.get(url);
  }
  static save(modelName, values){
    var method = "POST";

    if(values.id){
      method = "PUT"
    }
    var fetchArgs = {
      method: method,
      credentials: 'include',
      body: JSON.stringify(values),
      headers: this.getHeaders()
    }

    return fetch(this.getUrl(modelName, values.id), fetchArgs).then(function(response) {
      return response.json();
    }).catch(function(x){
      alert("Unable to send! " + x);
    });
  }
  static delete(modelName, id){
    var fetchArgs = {
      method: "DELETE",
      credentials: 'include',
      headers: this.getHeaders()
    }
    return fetch(this.getUrl(modelName, id), fetchArgs).then(function(response) {
      return response.json();
    }).catch(function(x){
      alert("Unable to send! " + x);
    });
  }
}

export default Http

