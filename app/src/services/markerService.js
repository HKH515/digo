export var entries = [
    {
        "user": "Doddi A.",
        "lat": 64.123676,
        "lng": -21.926255,
        "post": "Kemur einhver í ping pong!?",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633055692
    },
    {
        "user": "Jane",
        "lat": 64.123876,
        "lng": -21.927255,
        "post": "I forgot my mac charger at the financial exam 
yesterday in classroom M101, if someone’s seen it please let me know ",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633054692
    },
    {
        "user": "Maria",
        "lat": 64.124276,
        "lng": -21.924755,
        "post": "Could anyone share with me the examples from 
MicroEconomics II?",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633054692
    },  
    {
        "user": "John",
        "lat": 64.126426,
        "lng": -21.922155,
        "post": "Anyone's not found a partner to write with and wants 
to write about marketing?",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633024692
    },   
    {
        "user": "Daniel",
        "lat": 64.123276,
        "lng": -21.924755,
        "post": "",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633054692
    },   
    {
        "user": "Mathieu",
        "lat": 64.122276,
        "lng": -21.925755,
        "post": "We're playing FIFA in the lounge if anyone wants to 
join us",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633054292
    },   
    {
        "user": "Jesus",
        "lat": 64.123276,
        "lng": -21.927755,
        "post": "Hello I am freeing the peoples of the world, anyone 
want to join me?",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633054692
    },
    {
        "user": "Anonymous",
        "lat": 64.123757,
        "lng": -21.924992,
        "post": "Það er verið að gefa pizzur í sólinni!!!!",
        "photoMarker": false,
        "photo": null,
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
