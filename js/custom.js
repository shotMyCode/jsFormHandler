function submitForm(id){
    let form = document.querySelector(id);
    form.addEventListener('submit', handler);
}
function handler(e){
    e.preventDefault();
    let response = this.nextElementSibling;
    let form_data = new FormData(this);
    let action = this.action;
    fetch(action, {
        method : 'POST',
        body: form_data,
    })
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        response.innerHTML = data;
    })
}
