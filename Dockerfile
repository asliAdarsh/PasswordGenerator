# syntax=docker/dockerfile:1.6

FROM node:20-alpine AS build

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json ./

# Cache npm downloads between builds
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source
COPY . .

# Build the Vite app
RUN npm run build


FROM node:20-alpine

WORKDIR /app

# Install a tiny static file server
RUN npm install -g serve

# Copy only built files from build stage
COPY --from=build /app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
