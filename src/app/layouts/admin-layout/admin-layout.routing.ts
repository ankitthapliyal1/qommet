import { Routes } from '@angular/router';

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
import { InstanceViewComponent } from 'app/pages/instance/instance-view/instance-view.component';

import { SupportComponent } from 'app/pages/support/support.component';
import { AccountComponent } from 'app/pages/account/account.component';
import { SupportReplyComponent } from 'app/pages/support-reply/support-reply.component';
import { OrderViewComponent } from 'app/pages/order-view/order-view.component';
import { ReferralProgramComponent } from 'app/pages/referral-program/referral-program.component';

export const AdminLayoutRoutes: Routes = [
    { path: '0/instanceList/instance',      component: InstanceComponent },
    { path: '0/instanceList',  component: InstanceListComponent },
    { path: '0/instance-view/:id',  component: InstanceViewComponent },

    

    { path: '0/blockStorage',      component: BlockStorageComponent },
    { path: '0/kubernet',      component: KubernetsComponent },
    { path: '0/monitoring',      component: MonitoringComponent },
    { path: '0/networking',      component: NetworkingComponent },
    { path: '0/objectStorage',      component: ObjectStorageComponent },
    { path: '0/snapShot',      component: SnapshotsComponent },

    { path: '2/referral',      component: ReferralProgramComponent },

    { path: '1/addMoney',      component: AddMoneyComponent },
    { path: '1/history',      component: HistoryComponent },
    { path: '1/order-view/:id',      component: OrderViewComponent },

    {path:'4/support', component: SupportComponent},
    {path:'4/support/reply/:id', component: SupportReplyComponent},
    {path:'3/account', component: AccountComponent}
    


];
