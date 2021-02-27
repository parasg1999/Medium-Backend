# Login

Used to collect a token (to be used as `Authorization` header) for a registered User.

**URL** : `/user/login`

**Method** : `POST`

**Auth required** : `NO`

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
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