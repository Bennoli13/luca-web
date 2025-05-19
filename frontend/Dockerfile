# frontend/Dockerfile
FROM node:lts-alpine

WORKDIR /app

# Copy package files first (for Docker cache efficiency)
COPY package*.json ./
RUN npm install --include=dev

COPY . .

EXPOSE 5173

# Start dev server using the script (resolves ESM issues)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]