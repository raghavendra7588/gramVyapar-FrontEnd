import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent, LegalComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatCarouselModule.forRoot()
  ],
  entryComponents:[LegalComponent],
  exports: [HeaderComponent, BodyComponent, FooterComponent, LegalComponent, PageNotFoundComponent]
})
export class LayoutModule { }
