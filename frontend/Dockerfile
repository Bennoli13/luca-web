# frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY . .

# Ensure devDependencies are installed, including Vite
RUN npm install
RUN npm install -g vite

# Optional safety: ensure vite is available directly
RUN npx vite --version

# Start dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
