import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalutyComponent } from './waluty/waluty.component';
import { SurowceComponent } from './surowce/surowce.component';
import { CurrencyComponent } from './currency/currency.component';
import { MaterialComponent } from './material/material.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './guard/auth.guard';
import { CryptoComponent } from './crypto/crypto.component';
import { KryptowalutyComponent } from './kryptowaluty/kryptowaluty.component';

const routes: Routes = [
  { path:"",component:WalutyComponent},
  { path:"surowce",component:SurowceComponent},
  { path:"crypto",component:KryptowalutyComponent},
  { path:"crypto/kryptowaluta/:code",component:CryptoComponent},
  { path:"currency/:code",component:CurrencyComponent},
  { path:"surowce/material/:code",component:MaterialComponent},
  { path:"profil",component:ProfilComponent, canActivate:[AuthGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
