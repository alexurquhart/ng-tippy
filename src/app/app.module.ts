import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TooltipDirective } from 'app/tooltip.directive';
import { ShowcaseButtonComponent } from './showcase-button.component';
import { InteractiveTooltipComponent } from './interactive-tooltip/interactive-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    ShowcaseButtonComponent,
    InteractiveTooltipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
