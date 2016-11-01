#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "https://aqueous-atoll-85096.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "my@email.com",
      "password": "123"
    }
  }'
