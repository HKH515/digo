export var entries = [
    {
        "user": "Guðmundur",
        "lat": 64.13,
        "lng": -21.16178,
        "post": "Come swimming with me!",
        "photoMarker": true,
        "photo": "http://handpickediceland.is/wp-content/uploads/2015/03/30-Ylstr%C3%B6ndin-Nauth%C3%B3lsv%C3%ADk.jpg",
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
    {
        "user": "Anonymous",
        "lat": 64.123304,
        "lng": -21.924630,
        "post": "Is anyone selling a copy of this book? or perhaps the 3rd edition?",
        "photoMarker": true,
        "photo": "https://i.pinimg.com/originals/b0/e1/8e/b0e18ee399cc53231653727dc63e94ea.jpg",
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
    {
        "user": "Doddi A.",
        "lat": 64.123676,
        "lng": -21.926255,
        "post": "Anyone up for ping pong?",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/30/2018, 10:20:54 AM"
    },
    {
        "user": "Jane",
        "lat": 64.123876,
        "lng": -21.927255,
        "post": "I forgot my Mac charger at the financial exam yesterday in classroom M101, if anyone's seen it please let me know! Thanks!",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
    {
        "user": "Maria",
        "lat": 64.124276,
        "lng": -21.924755,
        "post": "Could anyone share the example problems from MicroEconomics II with me? :)",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },  
    {
        "user": "John",
        "lat": 64.126426,
        "lng": -21.922155,
        "post": "Anyone's still looking for a partner to write the marketing essay with?",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },   
    {
        "user": "Mathieu",
        "lat": 64.123705,
        "lng": -21.926371,
        "post": "We're playing FIFA in the lounge if anyone wants to join!",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },   
    {
        "user": "Jesus",
        "lat": 64.123276,
        "lng": -21.927755,
        "post": "Hello!!! I am freeing the peoples of the world, care to join?",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
    {
        "user": "Pietre",
        "lat": 65.686914,
        "lng": -18.124839,
        "post": "I'm looking for a ride to Reykjavik!",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
    {
        "user": "Anonymous",
        "lat": 64.123757,
        "lng": -21.924992,
        "post": "There's leftover pizza in the main lounge!!!!",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/30/2018, 12:29:24 AM"
    }
]

export function getEntries() {
    return entries;
}

export function addEntry(user, lat, lng, post) {
    var now = new Date();
    var newInput = {
        "user": user,
        "lat": lat,
        "lng": lng,
        "post": post,
        "timestamp": now.toLocaleString(),
    }
    entries.unshift(newInput);
    console.log(newInput);
}
