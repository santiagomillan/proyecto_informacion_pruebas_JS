const username = document.querySelector("#name")
const email = document.querySelector("#email")
const website = document.querySelector("#website")
const address = document.querySelector("#address")
const zip = document.querySelector("#zip")

const getUsuarios = async () => {
    const { data } = await axios.get(
        " https://jsonplaceholder.typicode.com/users "
    )
    console.log(data[0])
    username.innerHTML = data[0].name
    email.innerHTML = data[0].email
    website.innerHTML = data[0].website
    address.innerHTML = data[0].address.street
    zip.innerHTML = data[0].address.zipcode

    // const users = data.map((index) => {
    //     username.innerHTML = data[index].name
    //     email.innerHTML = data[index].email
    //     website.innerHTML = data[index].website
    //     address.innerHTML = data[index].address.street
    //     zip.innerHTML = data[index].address.zipcode
    // })
};
getUsuarios();