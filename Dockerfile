# ---------- STAGE 1: build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm install

# Copia o resto do projeto
COPY . .

# Build do Vite
RUN npm run build

# ---------- STAGE 2: production ----------
FROM nginx:alpine

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config custom do nginx
COPY nginx.conf /etc/nginx/conf.d

# Copia build do React
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
