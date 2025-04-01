import { Routes } from "@angular/router";
import { FeuillePersoComponent } from "./components/feuille-perso/feuille-perso.component";
import { ListeRecapPersoComponent } from "./components/liste-recap-perso/liste-recap-perso.component";
import { TestComponent } from "./components/test/test.component";
import { Page404Component } from "./components/page404/page404.component";

export const routes: Routes = [
    
    { path: "", component: ListeRecapPersoComponent },
    { path: "liste", component: ListeRecapPersoComponent },
    { path: "feuille/:id", component: FeuillePersoComponent },
    
    // { path: "", outlet: "secondary", component: TestComponent },
    { path:"test", outlet: "secondary", component: TestComponent },

    // { path: '', redirectTo: '/liste', pathMatch: 'full' },

    { path: "**", component: Page404Component}
]
