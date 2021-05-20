import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  handleChange(event: any) {
    this.checked = !this.checked;
}

}
