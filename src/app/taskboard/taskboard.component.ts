import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { TaskBoardService } from './taskboard.service';
import { Task } from './taskboard.model';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent  {

  @ViewChild('deviceName') name: ElementRef;
  @ViewChild('deviceDescription') description: ElementRef;

  public devices: Task[];

  constructor(private elRef: ElementRef, private taskBoardService: TaskBoardService) {
    this.devices = taskBoardService.devices
  }

  onAddDevice() {
    if (this.description.nativeElement.value !== '' && this.name.nativeElement.value !== '') {
      this.taskBoardService.addNewDevice(
          this.name.nativeElement.value,
          this.description.nativeElement.value
        );
      this.devices = this.taskBoardService.getAllDevices();
    }
    this.name.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.name.nativeElement.focus();
  }

}
