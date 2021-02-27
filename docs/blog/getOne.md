# Get blog using id

Used to get all the blogs distributed by pages (2 per page)

**URL** : `/blog/:id` (where `:id` is the `_id` of the blog)

**Method** : `GET`

**Auth required** : `NO`

**Example** : `/blog/6039754bce80c2552e49ed11`

## Success Response

**Code** : `200 OK`

**Content example**

```json
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
}
```

## Error Response

**Condition** : If no blog found.

**Code** : `404 NOT FOUND`

---

**Condition** : If not a valid ID.

**Code** : `400 BAD REQUEST`