export var entries = [
    {
        "user": "Doddi A.",
        "lat": 64.123676,
        "lng": -21.926255,
        "post": "Kemur einhver í ping pong!?",
        "photoMarker": false,
        "photo": "",
        "timestamp": 1527633055692
    },
    {
        "user": "Anonymous",
        "lat": 64.123757,
        "lng": -21.924992,
        "post": "Það er verið að gefa pizzur í sólinni!!!!",
        "photoMarker": false,
        "photo": "",
        "timestamp": 1527633055692
    },
    {
        "user": "Guðmundur",
        "lat": 64.13,
        "lng": -21.16178,
        "post": "Hver kemur í sjósund?",
        "photoMarker": true,
        "photo": "http://handpickediceland.is/wp-content/uploads/2015/03/30-Ylstr%C3%B6ndin-Nauth%C3%B3lsv%C3%ADk.jpg",
        "timestamp": 1527633055692
    },
    {
        "user": "Anonymous",
        "lat": 64.15,
        "lng": -21.26178,
        "post": "Is anyone selling a copy of this book? or perhaps the 3rd edition?",
        "photoMarker": true,
        "photo": "https://i.pinimg.com/originals/b0/e1/8e/b0e18ee399cc53231653727dc63e94ea.jpg",
        "timestamp": 1527633055692
    }
]

export function getEntries() {
    return entries;
}

export function addEntry(user, lat, lng, post) {
    var newInput = {
        "user": user,
        "lat": lat,
        "lng": lng,
        "post": post,
        "timestamp": Date.now()
    }
    entries.unshift(newInput);
    console.log(newInput);
}
