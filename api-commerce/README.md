# API Commerce - TP REST API

Mini API REST avec Node.js, Express.js et MongoDB pour système commercial.

## Installation & Lancement
```bash
npm install
# Configurer .env avec MONGO_URI et JWT_SECRET
npm start
# ou npx nodemon server.js
```

## Authentification
Toutes les routes API nécessitent une authentification JWT.

### Inscription
`POST /api/auth/register`
```json
{
  "email": "admin@example.com",
  "password": "password123",
  "role": "admin"
}
```

### Connexion
`POST /api/auth/login`
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```
**Réponse:** `{ "token": "jwt_token_here", "user": {...} }`

### Utilisation du token
Ajouter dans les headers: `Authorization: Bearer YOUR_JWT_TOKEN`

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
1. S'inscrire/Se connecter pour obtenir un token JWT
2. Utiliser le token dans Authorization header pour toutes les autres requêtes
3. Tester toutes les routes CRUD pour chaque module

## Captures d'écran
- Placer les screenshots Postman dans un dossier `screenshots/`
- Inclure tests réussis et erreurs pour chaque route

## Structure MVC
- `models/` - Schémas Mongoose
- `controllers/` - Logique métier
- `routes/` - Routes Express
- `middleware/` - Authentification

## Lien GitHub
https://github.com/youssef-jalal/api-commerce.git