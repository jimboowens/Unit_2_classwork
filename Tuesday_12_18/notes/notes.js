//  API - application programming interface -- I see it as pseudo-back-end stuff. 
// It has a lot of datat we can tap into, which is nice. 
// JSON is javascript object notation : 
    let order = {
        orderid: "2309adi49f",
        recipient:{
            name: "John Smith",
            address: {
                street: "165 Shelford Ave",
                city: "Avondale",
                state: "Texas",
            }
        },
        items: {
            item: {
                name:"How to find peace",
                quantity: 1,
                price: 10.99,
            }
            item:{
                name:"Streams in the Desert",
                quantity: 1,
                price: 15.99
            },
        }
    }
    // XML has tags like HTML, but allows tags to be anything. While it's easy 
    // for a person to read, it is very hard (nary impossible) for a computer 
    // to read 
    // HTTP is ALWAYS port 80
    // HTTPS is always port 443
    // any port under 1000 is kind of reserved and only can be accessed by the
    // root; HTTP and HTTPS can be modified, but requests would be confused by 
    // other sites/users trying to access our API