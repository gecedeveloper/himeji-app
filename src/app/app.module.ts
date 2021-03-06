import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdListModule, MdTabsModule, MdTableModule} from '@angular/material';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TableComponent } from './ui/table/table.component';
import { CdkTableModule } from '@angular/cdk'

const appRoutes:Routes = [
  {
    'path' : '\invoice',
    component: InvoiceComponent
  },
  {
    'path' : '\product',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InvoiceComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdTabsModule,
    MdTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
