#!/bin/bash

npm install

npx prisma migrate dev

npm run dev

tail -f /dev/null