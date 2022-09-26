const getUsuarios = async () => {
    const { data } = await axios.get(
        " https://jsonplaceholder.typicode.com/users "
    )
    console.log(data)
};
getUsuarios();