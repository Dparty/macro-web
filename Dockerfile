FROM node:20.10.0

WORKDIR /app

# Copy package.json and package-lock.json to the container  
COPY package*.json ./
RUN npm install
# Copy the app source code to the container  
COPY . .

# Build the Next.js app  
RUN npm run build

# Expose the port the app will run on  
EXPOSE 3000

# Start the app
CMD ["npm", "start"]