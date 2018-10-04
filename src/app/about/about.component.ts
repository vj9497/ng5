import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  sendHome(){
    this.router.navigate(['']);
  }
}
