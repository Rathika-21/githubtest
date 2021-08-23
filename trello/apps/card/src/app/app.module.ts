import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { organizeTaskReducer } from './store/reducer';


@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({Reducer:organizeTaskReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
