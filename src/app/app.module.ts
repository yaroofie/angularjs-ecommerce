import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PublicTemplateComponent } from './components/templates/public-template/public-template.component';
import { PanelTemplateComponent } from './components/templates/panel-template/panel-template.component';
import { LoginPageComponent } from './components/pages/auth/login-page/login-page.component';
import { TasksComponent } from './components/pages/panel/tasks/tasks.component';
import { TaskCardComponent } from './components/organisms/cards/task-card/task-card.component';
import { TaskFormComponent } from './components/organisms/forms/task-form/task-form.component';
import { AskDeleteModalComponent } from './components/organisms/modals/ask-delete-modal/ask-delete-modal.component';
import { FormControlComponent } from './components/molecules/input/form-control/form-control.component';
import { ButtonIconComponent } from './components/atoms/button-icon/button-icon.component';
import { SendingStatusComponent } from './components/atoms/sending-status/sending-status.component';
import { AvatarImageComponent } from './components/atoms/avatar-image/avatar-image.component';
import { AuthenticationTemplateComponent } from './components/templates/authentication-template/authentication-template.component';
import { ErrorTemplateComponent } from './components/templates/error-template/error-template.component';
import { RootComponent } from './components/root/root.component';
import { PanelNavigationComponent } from './components/organisms/navigations/panel-navigation/panel-navigation.component';
import { PanelHeaderComponent } from './components/organisms/headers/panel-header/panel-header.component';
import { PanelFooterComponent } from './components/organisms/footers/panel-footer/panel-footer.component';

@NgModule({
  declarations: [
    PublicTemplateComponent,
    PanelTemplateComponent,
    LoginPageComponent,
    TasksComponent,
    TaskCardComponent,
    TaskFormComponent,
    AskDeleteModalComponent,
    FormControlComponent,
    ButtonIconComponent,
    SendingStatusComponent,
    AvatarImageComponent,
    AuthenticationTemplateComponent,
    ErrorTemplateComponent,
    RootComponent,
    PanelNavigationComponent,
    PanelHeaderComponent,
    PanelFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
