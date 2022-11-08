import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hogwarts-House';
  imageUrl = 'url(https://i.postimg.cc/6pwgpsNL/pexels-rodnae-productions-7978241.jpg)'

  constructor(private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationStart), map(e => e as NavigationStart))
    .subscribe((event: NavigationStart) => {
      console.log(event)
      if(event.url === '/House') {
        this.imageUrl = 'url(https://i.postimg.cc/VNw8wKSn/d13c88d15dd34933ec9446c64c39419a6fc78387.jpg)'
      } else if(event.url === '/login') {
        this.imageUrl = 'url(https://i.postimg.cc/6pwgpsNL/pexels-rodnae-productions-7978241.jpg)'
      }
    });
  }
}
