# # Step --- 01
# # Base Image
# FROM node:22-alpine

# # Set working directory
# WORKDIR /app

# # Copy package.json to /app
# COPY package.json .

# # Install dependencies
# RUN npm install

# # Copy rest of the code
# COPY . .

# # Expose port
# EXPOSE 3000

# # Run command
# CMD ["npm", "start"]


# -----------------------------------------------------
# Step 01: Build React App
# Base Image for building React app
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# *********************************************************************

# Step 02: Serve React App with Nginx
# Base Image for serving React app with Nginx
FROM nginx:1.28-alpine

# Copy built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command to start Nginx, daemon off for foreground mode
CMD ["nginx", "-g", "daemon off;"]
