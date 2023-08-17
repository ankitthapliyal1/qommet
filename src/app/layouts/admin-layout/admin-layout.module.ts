import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InstanceComponent } from 'app/pages/instance/instance.component';

import { BlockStorageComponent } from 'app/pages/block-storage/block-storage.component';
import { KubernetsComponent } from 'app/pages/kubernets/kubernets.component';
import { MonitoringComponent } from 'app/pages/monitoring/monitoring.component';
import { NetworkingComponent } from 'app/pages/networking/networking.component';
import { ObjectStorageComponent } from 'app/pages/object-storage/object-storage.component';
import { SnapshotsComponent } from 'app/pages/snapshots/snapshots.component';
import { AddMoneyComponent } from 'app/pages/add-money/add-money.component';
import { HistoryComponent } from 'app/pages/history/history.component';
import { InstanceListComponent } from 'app/pages/instance/instance-list/instance-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccountComponent } from 'app/pages/account/account.component';
import { SupportComponent } from 'app/pages/support/support.component';
import { SupportReplyComponent } from 'app/pages/support-reply/support-reply.component';
import { LoadingComponent } from 'app/pages/loading/loading.component';
import { ReferralProgramComponent } from 'app/pages/referral-program/referral-program.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxChartsModule,
    NgxSpinnerModule
  ],
  declarations: [
    InstanceComponent,
    InstanceListComponent,
    KubernetsComponent,
    SnapshotsComponent,
    NetworkingComponent,
    BlockStorageComponent,
    MonitoringComponent,
    ObjectStorageComponent,

    AddMoneyComponent,
    HistoryComponent,

    SupportComponent,
    SupportReplyComponent,
    AccountComponent,

    LoadingComponent,

    ReferralProgramComponent

    




  
  ],

 

})

export class AdminLayoutModule {}
