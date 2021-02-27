# Delete User

Delete user only if the user is logged in

**URL** : `/user/delete`

**Method** : `DELETE`

**Auth required** : NO

**Data constraints**

```json
{
    "id": "user id to delete"
}
```

**Data example**

```json
{
    "username": "someone@example.com",
    "password": "aStrongPassword"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If `email` and `password` combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Error: Incorrect Credentials"
}
```

---

**Condition** : If either parameter is missing.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "errors": {
        "[field_name]": "error_message"
    }
}
```