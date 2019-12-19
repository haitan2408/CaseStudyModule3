import { NgModule } from '@angular/core';
import {
  MatProgressBarModule, MatButtonModule, MatProgressSpinnerModule, MatTabsModule,
  MatIconModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCheckboxModule,
  MatSelectModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatSnackBarModule,
  MatTooltipModule, MatStepperModule, MatTableModule, MatSortModule, MatDialogModule,
  MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatListModule,
}
  from '@angular/material';
const MaterialModules = [
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatStepperModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialModules,
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }