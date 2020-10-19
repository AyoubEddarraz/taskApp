import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { taskComponent } from './components/taskApp/task.component';


const routes: Routes = [
  { path : "task" , component : taskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
