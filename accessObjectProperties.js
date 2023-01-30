const user = {
    name: 'Ryan',
    lastname: 'Perez',
    age: 42,
    address: {
        country: 'colombia',
        city: 'bogota',
        steet: 'main street 123'
    },
    friends: ['maria, henlys'],
    active: true,
    sendMail() {
        return 'sending email...'
    }
}
console.log(user.name)
console.log(user.address)
console.log(user.address.city)
console.log(user.friends)
console.log(user.sendMail)
console.log(user.sendMail())
