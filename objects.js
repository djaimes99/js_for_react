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
    sendMail: function() {
        return 'sending email...'
    }
}
console.log(user)
