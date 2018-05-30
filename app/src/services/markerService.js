export var entries = [
    {
        "user": "Doddi A.",
        "lat": 64.123676,
        "lng": -21.926255,
        "post": "Kemur einhver í ping pong!?",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/30/2018, 10:20:54 AM"
    },
    {
        "user": "Anonymous",
        "lat": 64.123757,
        "lng": -21.924992,
        "post": "Það er verið að gefa pizzur í sólinni!!!!",
        "photoMarker": false,
        "photo": null,
        "timestamp": "5/30/2018, 12:29:24 AM"
    },
    {
        "user": "Guðmundur",
        "lat": 64.13,
        "lng": -21.16178,
        "post": "Hver kemur í sjósund?",
        "photoMarker": true,
        "photo": "http://handpickediceland.is/wp-content/uploads/2015/03/30-Ylstr%C3%B6ndin-Nauth%C3%B3lsv%C3%ADk.jpg",
        "timestamp": "5/29/2018, 21:20:36 AM"
    },
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
