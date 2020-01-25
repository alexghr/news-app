FROM node:alpine as build

ENV NODE_ENV development
WORKDIR /news

COPY ./package.json yarn.lock lerna.json ./

# Install deps first
# We do this first in order for Docker to cache and reuse this step if package.json/yarn.lock don't change
RUN yarn install

# Copy the code
COPY . ./

# Run `yarn install` again in order to link the workspaces together
RUN yarn install && yarn build

# Build the production image
FROM node:alpine

ENV PORT 8080
ENV NODE_ENV production

COPY --from=build /news /news
WORKDIR /news

RUN rm -rf node_modules && yarn install --production --frozen-lockfile

EXPOSE $PORT
CMD [ "node", "./node_modules/.bin/start-server" ]
