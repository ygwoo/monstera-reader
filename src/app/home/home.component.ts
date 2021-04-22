import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private electronSrv: ElectronService) {}

  ngOnInit(): void {}
}
