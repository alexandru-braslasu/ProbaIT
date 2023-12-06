const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./db/userModel");
const Poll = require("./db/pollModel");
const auth = require("./auth");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (request, response) => {
  const foundUser = await User.findOne({ email: request.body.email });
  if (foundUser !== null)
    response.status(400).send({
      error: "That email address is already in use!"
    });
  else {
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
        });

        user
          .save()
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })

      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  }
});

app.post("/login", (request, response) => {
  User.findOne({ email: request.body.email })

    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)

        .then((val) => {

          if (val) {
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "authenticationToken",
              { expiresIn: "24h" }
            );

            response.header("token", token);
            response.status(200).send({
              message: "Login Successful",
              email: user.email,
              token,
            });
          } else {
            response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
        })
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

app.get("/polls", (request, response) => {
  Poll.find()
    .then((polls) => {
      if (!polls)
        response.status(404).send({
          error: "No polls found"
        });
      else
        response.status(200).json(polls);
    })
    .catch((error) => {
      response.status(505).send({
        error
      })
    })
});

app.post("/polls", auth, (request, response) => {
  const { title, options } = request.body;
  const user = request.user;
  User.findOne({ _id: user.userId })
    .then((foundUser) => {
      if (!foundUser)
        response.status(404).send({
          error: "User does not exist"
        });
      else {
        const newPoll = new Poll({
          owner: user.userId,
          title,
          options: options.map(option => ({ option_text: option.option_text }))
        });
        newPoll.save();
        foundUser.polls.push(newPoll);
        response.status(201).send({
          message: "Poll created successfully"
        })
      }
    })
    .catch(() => {
      response.status(500).send({
        error: "User not found"
      })
    })
});

app.delete("/polls/:pollId", auth, async (request, response) => {
  const { pollId } = request.params;
  const poll = await Poll.findById(pollId);
  const ownerId = poll.owner;
  const user = request.user;
  if (ownerId == user.userId)
    await Poll.findByIdAndDelete(pollId);
  else {
    response.status(500).send({
      error: "You are not logged in as owner"
    })
  }
  return response.status(200).send({ poll });
});

app.patch("/polls/vote/:id", auth, (request, response) => {

});

module.exports = app;