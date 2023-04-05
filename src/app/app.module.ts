import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomNgIfDirective } from "./custom-ng-if.directive";
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CustomNgIfDirective, UppercaseDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
