# Follow User

Follow another user

**URL** : `/user/follow`

**Method** : `POST`

**Auth required** : `YES`

**Data constraints**

```json
{
    "id": "user id to follow"
}
```

**Data example**

```json
{
    "id": "603a18d2f7e08b9282f83727"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "success" : true
}
```

## Error Response

**Condition** : If `id` and `user id` match.

**Code** : `400 BAD REQUEST`

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`

---

**Condition** : If no user exists for the `id`.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "error": "Error: No such user"
}
```