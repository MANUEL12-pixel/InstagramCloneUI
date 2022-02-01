import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { NoticesComponent } from './components/Body/notices.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NoticesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
