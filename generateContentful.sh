#!/bin/bash

# read env file
source .env.local
# run the command with variables
npx cf-content-types-generator -s $CONTENTFUL_SPACE_ID -t $CONTENTFUL_MANAGEMENT_TOKEN -o src/types/contentful.ts  -X 
