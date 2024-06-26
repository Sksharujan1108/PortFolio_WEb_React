# Step --- 01
# Base Image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json to /app
COPY package.json .

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Run command
CMD ["npm", "start"]


# Step ---- 02 Service With Nginx
FROM nginx:1.28-alpine