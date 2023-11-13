# Common build stage
FROM cypress/included:12.12.0

COPY . ./app

WORKDIR /app

RUN npm install

CMD ["npm", "run", "ci"]