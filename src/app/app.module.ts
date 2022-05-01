import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountClickComponent } from './count-click/count-click.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [AppComponent, CountClickComponent, CheckBoxComponent , ChildCompComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
