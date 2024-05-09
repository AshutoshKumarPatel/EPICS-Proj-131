FROM node:18

WORKDIR /app

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y iproute2 && \
    ss -nlpt

RUN npm install

RUN npm audit fix

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
