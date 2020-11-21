"# url-shortener" 
heroku login
heroku create
git init
git add .
git commit -m "init"
git push heroku master
https://mighty-cove-07983.herokuapp.com/

SET ENV in heroku
heroku config:set NODE_ENV="production"
heroku config:set DB="mongodb+srv://user:1qaz2wsx@cluster0.kazkg.mongodb.net/links?retryWrites=true&w=majority"
heroku config:set APP_LINK="https://mighty-cove-07983.herokuapp.com"

SEE all ENV 
heroku config

Run project as local (http://localhost:5000/)
heroku local
