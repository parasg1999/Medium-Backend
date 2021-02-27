# Medium-API

This is the implementation for how I think the backend of a blogging platform like Medium would function.

## Open Endpoints
These endpoints don't require authentication

### Account related
- [Register user](docs/register.md) : `POST /user/register`
- [Login user](docs/login.md) : `POST /user/login`

### Blog related
- [Get all blogs](docs/)
- [Search blogs using tags]()

## Endpoints that require Authentication
Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login (check above).

### Account related
- [Delete user]()
- [Follow user]()
- [Unfollow user]()

### Blog related
- [Post blog]()
- [Delete blog]()
- [Clap on blog]()
- [Comment on blog]()
- [Post blog]()

<!-- ## Routes
#### Authentication 

|Method|Route|Description|Parameters|
|------|-----|-----------|----------|
|POST|/user/register|Register user on the platform| - name<br/>- email<br/>- password<br/>
|POST|/user/login|Register user on the platform| - name<br/>- email<br/>- password<br/>

- POST /user/register -->