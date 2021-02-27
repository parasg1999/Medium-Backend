# Clap on a blog

Show appreciation for the blog post

**URL** : `/blog/clap`

**Method** : `POST`

**Auth required** : `YES`

**Data constraints**

```json
{
    "id": "[id of blog]",
}
```

**Data example**

```json
{
    "id": "603971e4818e9151b07d8c0f",
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