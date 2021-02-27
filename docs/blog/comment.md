# Comment on a blog

Post a new comment on a blog

**URL** : `/blog/comment`

**Method** : `POST`

**Auth required** : `YES`

**Data constraints**

```json
{
    "id": "[id of blog]",
    "content": "[content]",
}
```

**Data example**

```json
{
    "id": "603971e4818e9151b07d8c0f",
    "content": "A very basic comment",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "success": true
}
```

## Error Response

**Condition** : If content is missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "errors": {
        "content": "We can't work without content"
    }
}
```

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`

---

**Condition** : If no such blog found.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "No blog found"
}
```