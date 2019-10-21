import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './container/item/item.component';
import { ConnectorDirective } from './container/connector.directive';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContainerComponent, ItemComponent, ConnectorDirective, IncrementDecrementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
