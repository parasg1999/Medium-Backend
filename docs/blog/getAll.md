# Get all blogs

Used to get all the blogs distributed by pages (2 per page)

**URL** : `/blog?page=page_number(optional)`

**Method** : `GET`

**Auth required** : `NO`

**Example** : `/blog?page=2`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "metadata": [
            {
                "total": 3
            }
        ],
        "data": [
            {
                "_id": "6039f9b8c6782e588d13da2d",
                "tags": [
                    "firstpost",
                    "paraskablog",
                    "yolo"
                ],
                "claps": 0,
                "clappers": [],
                "title": "My first blog",
                "description": "Nothing really",
                "content": "A very long blog lol",
                "author": [{
                    "_id": "603a052c499f187355160359",
                    "name": "Fname Lname",
                    "email": "someone@example.com"
                }],
                "bannerImage": "/uploads/1614412216436.png",
                "__v": 0
            }
        ]
    }
]

```

## Error Response

**Condition** : If page number not valid.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Invaid page number"
}
```
