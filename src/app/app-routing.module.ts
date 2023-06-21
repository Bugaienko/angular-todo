import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./views/main/main.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";


const routes: Routes = [
   // {path: '', component: AppComponent},
   {path: '', redirectTo: 'test', pathMatch: 'full'},
   {path: 'test', component: MainComponent}
];

@NgModule({
   imports: [BrowserModule, RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {}
