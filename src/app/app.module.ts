import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { ItemsService, WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import {
  AsyncServiceComponent,
  InputOutputComponent,
  RoutedComponent,
  ServiceComponent,
  GreetingService,
  SimpleComponent,
  TemplateComponent
} from './examples';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WidgetsComponent,
    AsyncServiceComponent,
    InputOutputComponent,
    RoutedComponent,
    ServiceComponent,
    SimpleComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [ItemsService, WidgetsService, GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
