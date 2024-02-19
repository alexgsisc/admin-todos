# Development

This steps get up app in develop

* run data base
```
docker compose up -d
```

2. rename file .env.template a .env
3. update environment variables
4. execute service Get seed for creating data base 
[Create Seed](localhost:3000/api/v1/seed)

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

2.- You will execut seed 

