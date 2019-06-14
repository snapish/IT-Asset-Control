import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material'
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
