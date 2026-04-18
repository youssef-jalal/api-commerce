# API Commerce

Mini API REST avec Node.js, Express.js et MongoDB pour gérer un système commercial.

## Modules

- **Clients**: Gestion des informations clients (nom complet, email, téléphone, ville)
- **Produits**: Gestion des articles (nom, catégorie, prix, quantité en stock)
- **Commandes**: Gestion des achats (date, client, produits commandés, montant total)

## Installation

1. Cloner le repository
2. Installer les dépendances: `npm install`
3. Configurer MongoDB et créer un fichier `.env` avec `MONGO_URI`
4. Lancer le serveur: `npm start` ou `npx nodemon server.js`

## Routes API

### Clients
- `POST /api/clients` - Créer un client
- `GET /api/clients` - Obtenir tous les clients
- `GET /api/clients/:id` - Obtenir un client
- `PUT /api/clients/:id` - Modifier un client
- `DELETE /api/clients/:id` - Supprimer un client

### Produits
- `POST /api/products` - Créer un produit
- `GET /api/products` - Obtenir tous les produits
- `GET /api/products/:id` - Obtenir un produit
- `PUT /api/products/:id` - Modifier un produit
- `DELETE /api/products/:id` - Supprimer un produit

### Commandes
- `POST /api/orders` - Créer une commande
- `GET /api/orders` - Obtenir toutes les commandes
- `GET /api/orders/:id` - Obtenir une commande
- `PUT /api/orders/:id` - Modifier une commande
- `DELETE /api/orders/:id` - Supprimer une commande

## Structure MVC

- `models/` - Modèles Mongoose
- `controllers/` - Logique métier
- `routes/` - Définition des routes Express