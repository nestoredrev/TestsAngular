import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermedio2/hospital/hospital.component';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';


export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent }, 
    { path: '**', component: MedicoComponent }, // 404
    { path: 'hospital', pathMatch: 'full', redirectTo: 'path' } // default
]