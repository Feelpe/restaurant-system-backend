FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build
CMD [ "node", "dist/main.js" ]
