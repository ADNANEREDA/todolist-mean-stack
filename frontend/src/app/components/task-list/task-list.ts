import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  imports: [ReactiveFormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  tasks: Task[] = [];
  editingId: string | null = null; // id de la tâche en cours de modification

  // Formulaire d'ajout
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
  });

  // Formulaire de modification
  editForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
  });

  ngOnInit() {
    this.loadTasks();
  }

  // Charger la liste depuis l'API
  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.cdr.detectChanges();
    });
  }

  // Ajouter une tâche
  addTask() {
    if (this.form.invalid) return;
    this.taskService.addTask(this.form.value as Partial<Task>).subscribe(() => {
      this.form.reset({ title: '', description: '' });
      this.loadTasks();
    });
  }

  // Terminer / Reprendre
  toggleCompleted(task: Task) {
    this.taskService
      .updateTask(task._id!, { completed: !task.completed })
      .subscribe(() => this.loadTasks());
  }

  // Passer en mode modification
  startEdit(task: Task) {
    this.editingId = task._id!;
    this.editForm.setValue({
      title: task.title,
      description: task.description ?? '',
    });
  }

  // Enregistrer la modification
  saveEdit(task: Task) {
    if (this.editForm.invalid) return;
    this.taskService
      .updateTask(task._id!, this.editForm.value as Partial<Task>)
      .subscribe(() => {
        this.editingId = null;
        this.loadTasks();
      });
  }

  cancelEdit() {
    this.editingId = null;
  }

  // Supprimer une tâche
  deleteTask(task: Task) {
    this.taskService.deleteTask(task._id!).subscribe(() => this.loadTasks());
  }
}