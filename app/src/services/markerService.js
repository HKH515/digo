export var entries = [
    {
        "user": "A",
        "loc": "64.123742, -21.926178",
        "post": "asfsdjghsdk"
    },
    {
        "user": "Bjáni",
        "loc": "64.123741, -21.926178",
        "post": "asfsdjghsdk!!!!"
    },
    {
        "user": "C",
        "loc": "64.123743, -21.926178",
        "post": "asfsdjgsdfsdfhsdk"
    },
]

export function getEntries() {
    return entries;
}

export function addEntry(user, loc, post) {
    var newInput = {
        "user": user,
        "loc": loc,
        "post": post,
    }
    entries.push(newInput);
    console.log(newInput);
}
