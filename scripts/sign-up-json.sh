#!/bin/bash

#curl "http://localhost:3000/sign-up" \
curl "https://aqueous-atoll-85096.herokuapp.com//sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "my@email.com",
      "password": "123"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
