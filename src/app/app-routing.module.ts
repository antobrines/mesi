import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountPage } from './account/account.page';
import { LoginPage } from './auth/login/login.page';
import { BasketPage } from './basket/basket.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { HomePage } from './home/home.page';
import { ChatListPage } from './messages/chat-list/chat-list.page';
import { ChatPage } from './messages/chat/chat.page';
import { ProductPage } from './product/product.page';
import { AddCardPage } from './profile/add-card/add-card.page';
import { AdressesPage } from './profile/adresses/adresses.page';
import { ChangePasswordPage } from './profile/change-password/change-password.page';
import { CreditCardPage } from './profile/credit-card/credit-card.page';
import { DeleteCardPage } from './profile/delete-card/delete-card.page';
import { EditCardPage } from './profile/edit-card/edit-card.page';
import { HelpPage } from './profile/help/help.page';
import { InformationsPage } from './profile/informations/informations.page';
import { MenuPage } from './profile/menu/menu.page';
import { PurchasesPage } from './purchases/purchases/purchases.page';
import { RegistrationPage } from './registration/registration.page';
import { SearchPage } from './search/search.page';
import { MyTicketsPage } from './tickets/my-tickets/my-tickets.page';
import { NewTicketPage } from './tickets/new-ticket/new-ticket.page';
import { TicketPage } from './tickets/ticket/ticket.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'registration', component: RegistrationPage },
  { path: 'search', component: SearchPage },
  { path: 'purchases', component: PurchasesPage },
  { path: 'basket', component: BasketPage },
  { path: 'account', component: AccountPage },
  { path: 'forgot-password', component: ForgotPasswordPage },
  { path: 'profile/menu', component: MenuPage },
  { path: 'profile/informations', component: InformationsPage },
  { path: 'profile/change-password', component: ChangePasswordPage },
  { path: 'profile/credit-card', component: CreditCardPage },
  { path: 'profile/adresses', component: AdressesPage },
  { path: 'profile/help', component: HelpPage },
  { path: 'profile/add-card', component: AddCardPage },
  { path: 'profile/edit-card', component: EditCardPage },
  { path: 'profile/delete-card', component: DeleteCardPage },
  { path: 'chat-list', component: ChatListPage },
  { path: 'chat', component: ChatPage },
  { path: 'my-tickets', component: MyTicketsPage },
  { path: 'ticket', component: TicketPage },
  { path: 'new-ticket', component: NewTicketPage },
  { path: 'product/:id', component: ProductPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
