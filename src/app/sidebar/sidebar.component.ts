import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';


export interface RouteInfo {
    path: string;

    class: string;
    img: any;
}

export const ROUTES: RouteInfo[] = [

    { path: '/0', img: 'assets/img/sidebar/instance.png', class: '' },
    { path: '/1', img: 'assets/img/sidebar/history.png', class: '' },
    { path: '/2', img: 'assets/img/sidebar/refer.png', class: '' },
    { path: '/4', img: 'assets/img/sidebar/account.png', class: '' },
    { path: '/3', img: 'assets/img/sidebar/setting.png ', class: '' },
   

    // { path: '/0', img: 'assets/img/instance.png', class: '' },
    // { path: '/1', img: 'assets/img/history.png', class: '' },
    // { path: '/2', img: 'assets/img/refer.png', class: '' },
    // { path: '/3', img: 'assets/img/acount.png', class: '' },
    // { path: '/4', img: 'assets/img/settings.png', class: '' },
    // { path: '/upgrade',       class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    // @Input() index: any

    public menuItems: any[];


    public subMenuItems1: any = [
        // { path: '0/instance', title: 'Instance', class: 'active2' },
        { path: '0/instanceList', title: 'Instance', class: 'active2' },
        { path: '0/snapShot', title: 'Snapshots', class: 'active2' },
        { path: '0/networking', title: 'Networking', class: 'active2' },
        { path: '0/blockStorage', title: 'Block Storage', class: 'active2' },
        { path: '0/monitoring', title: 'Monitoring', class: 'active2' },
        { path: '0/objectStorage', title: 'Object Storage', class: 'active2' },
        // { path: '0/objectStorage', title: 'Apps', class: 'active2' }

    ]



    public subMenuItems2: any = [
        { path: '1/history', title: 'History' },
        { path: '1/addMoney', title: 'Add Money' },
       

    ]

    public subMenuItems3: any = [
        { path: '2/referral', title: 'Referral' },
        // { path: '1/history', title: 'History' },
        

    ]

    public subMenuItems4: any = [
       
        { path: '3/account', title: 'Account' },

    ]

    public subMenuItems5: any = [
        { path: '4/support', title: 'Support' },

    ]

    constructor(
        private router: Router,public authService: AuthService
    ) {

    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        console.log(this.router.url.charAt(1))
        this.menuindex = parseInt(this.router.url.charAt(1))
    }

    menuindex = 0

    


    menuClick(index: any) {
        console.log(index)
        this.menuindex = index
        location.reload();
        
    }

    // logOut(){
    //     localStorage.clear();
    //      window.location.href='/login'
    // }






}
