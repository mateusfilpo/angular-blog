import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover:string = "https://br.web.img3.acsta.net/c_310_420/pictures/18/06/29/00/35/0101925.jpg"
  contentTitle:string = ""
  contentDescription:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
