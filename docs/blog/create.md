# Create a new blog

Post a new blog

**URL** : `/blog`

**Method** : `POST`

**Auth required** : `YES`

**Data constraints**

```json
// form-data
{
    "title": "[title of blog]",
    "description": "[description]",
    "content": "[content]",
    "tags": "[array of strings]",
    "bannerImage": "[optional file]",
}
```

**Data example**

```json
{
    "title": "My first blog",
    "description": "Nothing really",
    "content": "A very long blog lol",
    "tags": "firstpost",
    "tags": "paraskablog",
    "tags": "yolo",
}
```

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
    "author": "603a1a4cdaab1c939df459a2",
    "bannerImage": "/uploads/1614422477053.png",
    "comments": [],
    "__v": 0
}
```

## Error Response

**Condition** : If either of the required parameters are missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "errors": {
        "[field_name]": "error_message"
    }
}
```

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`

```