import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';

@Injectable()
export class TaskBoardService {

    constructor() { }

    public devices: Task[] = [
        new Task(
                'Sensor',
                'Monitoramento de equipamentos eletro-eletrônicos.',
            )
    ];

    addNewDevice(title: string, description: string) {
        this.devices.push(new Task(
            title,
            description,
        ))
    }

    getAllDevices() {
        console.log(this.devices);
        return this.devices;
    }
}
