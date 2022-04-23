const postRequest = (url, body, onSuccess, onError) => {
  fetch(`http://localhost:5000/${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((res) => res.json())
    .then((res) => {
      onSuccess(res.response);
    })
    .catch((err) => {
        onError(err)
    });
};

const getRequest = (url, onSuccess, onError)=>{
    fetch(`http://localhost:5000/${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      onSuccess(res.response);
    })
    .catch((err) => {
        onError(err)
    });
}

export {postRequest,getRequest}