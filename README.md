# node-password-saver

## Get "/"
### Returns all saved passwords data from the Passwords collection
### response body
```JSON
{
  "savedPasswords": [
    {
      "_id": "document id",
      "password": "hashed password",
      "salt": "hashing salt"
    },
   ]
}
```

## Post "/"
### Saves hashed password and generated salt in Passwords collection
### request body
```JSON
{
	"password": "matchingPasswords",
	"passwordVerify": "matchingPasswords"
}
```

## Usage
Install packages
```
$ npm install
```
Run app locally
```
$ npm start
```
