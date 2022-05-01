import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountClickComponent } from './count-click/count-click.component';
import { CheckBoxComponent } from './check-box/check-box.component';

@NgModule({
  declarations: [AppComponent, CountClickComponent, CheckBoxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
