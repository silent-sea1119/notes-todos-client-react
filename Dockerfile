FROM node:14-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy all package.json folder into present work_dir
COPY package*.json ./

# Install the dependencies exactly as they are specified in package-lock.json 
RUN npm ci && npm cache clean --force

# Copy source files into work_dir
COPY . .

# Set the env to "production"
ENV NODE_ENV = production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000

CMD [ "npm", "run" ,"start" ]

