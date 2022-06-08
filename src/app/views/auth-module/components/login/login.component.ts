import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  registrati$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

}
