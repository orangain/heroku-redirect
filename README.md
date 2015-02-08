Heroku Redirect
===============

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This has come in handy more times than it should have.

## Configuration
To redirect all requests to example.com:

```
heroku config:add NEW_BASE_URL=http://example.com
```

**NOTE:** You may need to delete and re-create your Heroku app before pushing an entirely new Git repository into it.

To use status code 301 (by default 302):

```
heroku config:add STATUS_CODE=301
```
