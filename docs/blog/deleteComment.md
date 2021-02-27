# Delete comment from a blog

Delete comment from a blog

**URL** : `/blog/comment`

**Method** : `DELETE`

**Auth required** : `YES`

**Data constraints**

```json
{
    "blogID": "[id of blog]",
    "commentID": "[id of comment]"
}
```

**Data example**

```json
{
    "blogID": "603971e4818e9151b07d8c0f",
    "commentID": "6039754bce80c2552e49ed11",
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

**Condition** : If parameters are missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Please send required parameters"
}
```

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`

---

**Condition** : If no such comment with author found.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "No blog found"
}
```