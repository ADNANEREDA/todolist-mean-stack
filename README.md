# TP2 : To-Do List avec MEAN Stack

Application de gestion de tâches (MongoDB, Express, Angular, Node.js).

## Prérequis
- Node.js et Angular CLI
- Un compte MongoDB Atlas (ou MongoDB local)

## Lancer le backend
```bash
cd backend
npm install
```
Créez un fichier `.env` (modèle : `.env.example`) avec votre chaîne MongoDB, puis :
```bash
npm run dev      # http://localhost:3000
```

## Lancer le frontend
```bash
cd frontend
npm install
ng serve         # http://localhost:4200
```

## API REST
| Méthode | Route | Description |
|---|---|---|
| GET | /tasks | Liste des tâches |
| POST | /tasks | Ajouter une tâche |
| PUT | /tasks/:id | Modifier une tâche |
| DELETE | /tasks/:id | Supprimer une tâche |

## Modèle de données
- `title` : titre (texte, obligatoire)
- `description` : description (texte)
- `completed` : statut (booléen, `false` par défaut)

## Fonctionnalités
- Ajouter une tâche via un formulaire (Angular Reactive Forms)
- Consulter la liste avec le statut de chaque tâche
- Modifier le titre/la description
- Marquer une tâche comme terminée ou non (Terminer / Reprendre)
- Supprimer une tâche
- Données stockées dans MongoDB
