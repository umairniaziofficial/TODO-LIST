> All other commits were deleted due to the accidental revelation of the username and password.
# Todo List Deployed on Heroku

This is deployed on Heroku having the following features:

1. Create
2. Read
3. Update
4. Delete

## Languages used

1. Html
2. CSS
3. JS
4. Ejs

## Dependencies

- Mongoose
- Express
- Heroku
- Ejs
- Body-parser

### Install these Dependencies

**Open Terminal and then copy paste these commands init.**

```bash
npm i express body-parser mongoose ejs
```

## How to Deploy on Heroku

Follow these steps to deploy your application on Heroku:

**First Install The Heroku CLI if your don't have**

1. <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up">Download the Heroku CLI</a>
2. Login to Heroku

```bash
heroku login
```

3. Clone the Heroku to Avoid any conflicts

```bash
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started
```

4. Now Create and App that you can view on Heroku Profile Overview

```bash
heroku create
```

5. Now Deploy your first Push on Heroku Profile as you can view your demo Page Live Deployed

```bash
git push heroku main
heroku open
```

6. To View any errors that you cannot view your site

```bash
heroku logs --tail
```

7. Create a procfile file and paste the following line into it

```bash
web: npm start
```

<i><p class="text"><b>As this varies based on the files with which you are working, to understand what npm start will do, go and view the package file."</b></p></i>

8: Run Locally first and then Deploy and make sure you have __*heroku logs --tail*__ running
Run the following command:
```bash
heroku local web --port 5001
```
[Click Here to View your App Running](`https://localhost:5001`)

## After Changes Follow these Steps

**Copy and paste these Lines in your Terminal**

```bash
git add .
git commit -m "YOUR MESSAGE"
git push heroku main
heroku open
```

That's it your have successfully deployed your app and you can view your app live at the desired Heroku Website 

## Author
🔭 I’m currently working on Fronted projects<br>🧑‍💻 Founder of Nizzy Solutions<br>🌱 I’m currently learning full stack development<br>💬 Ask me about Web Design, Web Development, E-commerce Website Design, and Marketing

## 🌐 Socials:
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://www.facebook.com/profile.php?viewas=100000686899395&id=61551664601761) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/nizzypedia) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/nizzypedia) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UCF7PEEtUGOD_h7a13QgFaFA) 

