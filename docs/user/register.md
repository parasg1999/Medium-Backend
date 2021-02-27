# Register

Used to register a user on the platform.

**URL** : `/user/register`

**Method** : `POST`

**Auth required** : `No`

**Data constraints**

```json
// form-data
{
    "name": "[name]",
    "email": "[valid email address]",
    "password": "[password in plain text]",
    "profileImage": "[optional file]",
}
```

**Data example**

```json
{
    "name": "Fname Lname",
    "username": "someone@example.com",
    "password": "aStrongPassword",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": "603a052c499f187355160359",
    "name": "Fname Lname",
    "email": "someone@example.com",
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

**Condition** : If account already exists.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Already exists"
}
```