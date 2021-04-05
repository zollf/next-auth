FROM node:14

WORKDIR /app

COPY . /app

ENV MONGO_URL MONGO_URL
ENV DB_NAME points
ENV COL_NAME dataPoints

CMD yarn && yarn dev