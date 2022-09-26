const getUsuarios = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => console.log(response)).catch(err => console.log(err))

};

getUsuarios();
