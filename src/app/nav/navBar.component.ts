import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
/**
 * Created by johnjenkins on 6/7/17.
 */


@Component({
  selector : 'app-nav-bar',
  templateUrl : 'navbar.component.html'
})

export class NavBarComponent implements OnInit{
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'TV', icon: 'fa-check', // label for the drop down menu
        items: [
          [
            {
              label: 'TV 1',
              items: [{label: 'TV 1.1'}, {label: 'TV 1.2'}],
              command: (event) => { console.log('1', event); }
            },
            {
              label: 'TV 2',
              items: [{label: 'TV 2.1'}, {label: 'TV 2.2'}]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{label: 'TV 3.1'}, {label: 'TV 3.2'}]
            },
            {
              label: 'TV 4',
              items: [{label: 'TV 4.1'}, {label: 'TV 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Sports', icon: 'fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'}, {label: 'Sports 1.2'}]
            },
            {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'}, {label: 'Sports 2.2'}]
            },

          ],
          [
            {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'}, {label: 'Sports 3.2'}]
            },
            {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'}, {label: 'Sports 4.2'}]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'}, {label: 'Sports 5.2'}]
            },
            {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'}, {label: 'Sports 6.2'}]
            }
          ]
        ]
      }
    ];
  }
}




