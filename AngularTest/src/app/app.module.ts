import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';
import { DatedescComponent } from './datedesc/datedesc.component';
import { DayperiodComponent } from './dayperiod/dayperiod.component';
import { DateperiodComponent } from './dateperiod/dateperiod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    ItemComponent,
    FooterComponent,
    DatedescComponent,
    DayperiodComponent,
    DateperiodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
