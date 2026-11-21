# TP2 : To-Do List App avec MEAN Stack

Application de gestion de tâches (MongoDB, Express, Angular, Node.js).

## API REST
| Méthode | Route | Description |
|---|---|---|
| GET | /tasks | Liste des tâches |
| POST | /tasks | Ajouter une tâche |
| PUT | /tasks/:id | Modifier une tâche |
| DELETE | /tasks/:id | Supprimer une tâche |

## Fonctionnalités
- Ajouter une tâche via un formulaire (Angular Reactive Forms)
- Consulter la liste avec le statut de chaque tâche
- Modifier le titre/la description
- Marquer une tâche comme terminée ou non (Terminer / Reprendre)
- Supprimer une tâche
- Données stockées dans MongoDB
