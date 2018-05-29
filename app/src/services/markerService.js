export var entries = [
    {
        "user": "A",
        "lat": 54.123742,
        "lng": -21.926178,
        "post": "asfsdjghsdk",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633055692
    },
    {
        "user": "Bjáni",
        "loc": "64.123741, -21.926178",
        "lat": 34.123742,
        "lng": -11.926178,
        "post": "asfsdjghsdk!!!!",
        "photoMarker": false,
        "photo": null,
        "timestamp": 1527633055692
    },
    {
        "user": "C",
        "lat": 64.13,
        "lng": -21.16178,
        "post": "asfsdjgsdfsdfhsdk",
        "photoMarker": false,
        "photo": null,
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
    entries.push(newInput);
    console.log(newInput);
}
