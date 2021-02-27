# Delete User

Delete user only if the user is logged in

**URL** : `/user`

**Method** : `DELETE`

**Auth required** : `YES`

**Data constraints**

```json
{
    "id": "user id to delete"
}
```

**Data example**

```json
{
    "_id": "603a18d2f7e08b9282f83727"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": "603a18d2f7e08b9282f83727",
    "email": "parasg1999@gmail.com"
}
```

## Error Response

**Condition** : If `_id` and `user id` don't match.

**Code** : `403 FORBIDDEN`

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`