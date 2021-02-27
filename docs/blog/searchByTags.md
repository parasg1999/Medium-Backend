# Search blogs by tags

Used to search the blogs by tags

**URL** : `/blog/search?tags=tag1&tags=tag2`

**Method** : `GET`

**Auth required** : `NO`

**Example** : `/blog?tags=firstpost`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "tags": [
            "firstpost",
            "paraskablog",
            "yolo"
        ],
        "claps": 0,
        "clappers": [],
        "_id": "603a21cd0366b29998f1d817",
        "title": "My first blog",
        "description": "Nothing really",
        "content": "A very long blog lol",
        "author": {
            "_id": "603a1a4cdaab1c939df459a2",
            "name": "Paras Gupta",
            "email": "parasg1999@gmail.com"
        },
        "bannerImage": "/uploads/1614422477053.png",
        "comments": [],
        "__v": 0
    }, ...
]

```

## Error Response

**Condition** : If no tags suplied.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Tags required"
}
```
