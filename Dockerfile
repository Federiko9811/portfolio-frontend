# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Production stage
FROM nginx:alpine
# Copy the built static files to Nginx's serving directory
COPY --from=builder /app/out /usr/share/nginx/html

# Create a proper nginx.conf file
RUN echo 'server { \
    listen 3003; \
    listen [::]:3003; \
    root /usr/share/nginx/html; \
    index index.html; \
    server_name _; \
    \
    # Handle static assets directly \
    location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js|txt|pdf|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
        try_files $uri =404; \
    } \
    \
    # Handle everything else (SPA routing) \
    location / { \
        try_files $uri $uri.html $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 3003
CMD ["nginx", "-g", "daemon off;"]
