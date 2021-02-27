# Medium-API

This is the implementation for how I think the backend of a blogging platform like Medium would function.

## Open Endpoints
These endpoints don't require authentication

### Account related
- [Register user](docs/user/register.md) : `POST /user/register`
- [Login user](docs/user/login.md) : `POST /user/login`
- [Get user details](docs/user/details.md) : `GET /user/:id`

### Blog related
- [Get all blogs](docs/getAllBlogs.md) : `GET /blog`
- [Get a specific blog](docs/getAllBlogs.md) : `GET /blog/:id`
- [Search blogs using tags](docs/searchBlogsByTags.md): `GET /blog/search`

## Endpoints that require Authentication
Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login (check above).

The token should be passed as the value of the header called `Authorization`.

### Account related
- [Follow user](docs/user/follow.md) : `POST /user/follow`
- [Unfollow user](docs/user/unfollow.md) : `POST /user/unfollow`
- [Delete user](docs/user/delete.md) : `DELETE /user`

### Blog related
- [Post blog]()
- [Delete blog]()
- [Clap on blog]()
- [Comment on blog]()
- [Delete Comment from blog]()
- [Post blog]()