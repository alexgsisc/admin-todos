# Development

This steps get up app in develop

* run data base
```
docker compose up -d
```

2. rename file .env.template a .env
3. update environment variables
4. Ejecutar el comando ```npm install``` para reconstruir los módulos de node
5. Ejecutar el comando ```npm run dev``` para ejecutar aplicación en desarrollo
6. execute service Get seed for creating data base 
[Create Seed](localhost:3000/api/v1/seed)

## Nota: Usuario por defecto
__usuario:__  test1@example.com
__password:__ test123

# Prisma commands

```
npx prisma init
```
* create migration
```
npx prisma migrate dev
```
* create client
```
npx prisma generate
```
