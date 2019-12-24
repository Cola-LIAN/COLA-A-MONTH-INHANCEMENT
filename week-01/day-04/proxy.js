let market = {
    milk: 'Kowloon Diary'
}

let proxy = new Proxy(market, {
    get(receiver, name){
        // console.log(name);
        // console.log(receiver);
        // console.log(name in receiver)
        if(name in receiver){
            console.log(receiver[name])
            return true
        }else{
            console.log(`Sorry, we don't have this good support`);
            return false
        }
    }
})

proxy.milk
proxy.beer