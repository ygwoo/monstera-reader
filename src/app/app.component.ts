import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private electronService: ElectronService, private translate: TranslateService) {
    this.translate.setDefaultLang('zh-cn');
    console.log('Environment: ', AppConfig);

    if (electronService.isElectron) {
      // console.log(process.env);
      // console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      // console.log('NodeJS childProcess', this.electronService.childProcess);
      // console.log('NodeJS childProcess', this.electronService.webFrame);
    } else {
      console.warn('Run in browser');
    }
  }
}
