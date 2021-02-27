# Get User details using id

Used to search for a user using their ID.

**URL** : `/user/:id` (where `:id` is the `_id` of the user)

**Method** : `GET`

**Auth required** : `NO`

**Example** : `/user/603a052c499f187355160359`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "followers": [
        "list_of_users"
    ],
    "following": [
        "list_of_users"
    ],
    "_id": "603a052c499f187355160359",
    "name": "Fname Lname",
    "email": "someone@example.com",
}
```

## Error Response

**Condition** : If no user found.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "error": "No user found"
}
```

---

**Condition** : If not a valid ID.

**Code** : `400 BAD REQUEST`

