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

  @ViewChild('deviceTitle') title: ElementRef;
  @ViewChild('deviceMessage') description: ElementRef;

  public devices: Task[];

  constructor(private elRef: ElementRef, private taskBoardService: TaskBoardService) {
    this.devices = taskBoardService.devices
  }

  onAddDevice() {
    if (this.description.nativeElement.value !== '' && this.title.nativeElement.value !== '') {
      this.taskBoardService.addNewDevice(
          this.title.nativeElement.value,
          this.description.nativeElement.value
        );
      this.devices = this.taskBoardService.getAllDevices();
    }
    this.title.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.title.nativeElement.focus();
  }

}
