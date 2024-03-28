#!/bin/bash
apt-get update -y && apt-get install -y openssl procps

npm install

npx prisma migrate dev

npm run dev

tail -f /dev/null