#!/bin/bash

# curl --include --request POST "http://localhost:4741/books/" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "book": {
#       "title": "an example title",
#       "author": "Rebekah"
#     }
#   }'

#curl "http://localhost:3000/sign-up" \
curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --data-urlencode ''

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
