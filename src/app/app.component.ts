import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routers$: Subscription;

  constructor(private router: Router) { }


  ngOnInit() {
    this.routers$ = this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        let url = this.router.parseUrl(this.router.url);

        if(!url.fragment){
          window.scrollTo(0, 0)
        }
        else{
          const element: any = document.querySelector("#" + url.fragment);
          if (element) { element.scrollIntoView(element); }
        }
    });
  }

  ngOnDestroy(){
    this.routers$.unsubscribe();
  }
}
