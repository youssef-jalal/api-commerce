# API Commerce - TP REST API

Mini API REST avec Node.js, Express.js et MongoDB pour système commercial.

## Installation & Lancement
```bash
npm install
# Configurer .env avec MONGO_URI
npm start
# ou npx nodemon server.js
```

## Modules & Routes

### Clients (`/api/clients`)
- `POST /api/clients` - Créer client
- `GET /api/clients` - Tous les clients
- `GET /api/clients/:id` - Client spécifique
- `PUT /api/clients/:id` - Modifier client
- `DELETE /api/clients/:id` - Supprimer client

### Produits (`/api/products`)
- `POST /api/products` - Créer produit
- `GET /api/products` - Tous les produits
- `GET /api/products/:id` - Produit spécifique
- `PUT /api/products/:id` - Modifier produit
- `DELETE /api/products/:id` - Supprimer produit

### Commandes (`/api/orders`)
- `POST /api/orders` - Créer commande
- `GET /api/orders` - Toutes les commandes
- `GET /api/orders/:id` - Commande spécifique
- `PUT /api/orders/:id` - Modifier commande
- `DELETE /api/orders/:id` - Supprimer commande

## Tests Postman
Tester toutes les routes CRUD pour chaque module avec Postman.

## Captures d'écran
- Placer les screenshots Postman dans un dossier `screenshots/`
- Inclure tests réussis et erreurs pour chaque route

## Structure MVC
- `models/` - Schémas Mongoose
- `controllers/` - Logique métier
- `routes/` - Routes Express

## Lien GitHub
https://github.com/youssef-jalal/api-commerce.git