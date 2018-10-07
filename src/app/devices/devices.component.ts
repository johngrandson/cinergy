import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DevicesService } from './devices.service';
import { Device } from './devices.model';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  providers: [DevicesService],
  encapsulation: ViewEncapsulation.None
})
export class DevicesComponent  {

  @ViewChild('deviceName') name: ElementRef;
  @ViewChild('deviceDescription') description: ElementRef;

  public devices: Device[];

  constructor(private elRef: ElementRef, private devicesService: DevicesService) {
    this.devices = devicesService.devices
  }

  onAddDevice() {
    if (this.description.nativeElement.value !== '' && this.name.nativeElement.value !== '') {
      this.devicesService.addNewDevice(
          this.name.nativeElement.value,
          this.description.nativeElement.value
        );
      this.devices = this.devicesService.getAllDevices();
    }
    this.name.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.name.nativeElement.focus();
  }

}
