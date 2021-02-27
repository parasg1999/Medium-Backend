# Delete Blog

Delete blog only if the author is logged in

**URL** : `/blog`

**Method** : `DELETE`

**Auth required** : `YES`

**Data constraints**

```json
{
    "id": "blog id to delete"
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
    "_id": "603a18d2f7e08b9282f83727",
}
```

## Error Response

**Condition** : If no blog can be found with given id and author match.

**Code** : `404 NOT FOUND`

---

**Condition** : If not logged in.

**Code** : `401 UNAUTHORIZED`