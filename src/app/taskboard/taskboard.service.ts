import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';

@Injectable()
export class TaskBoardService {

    public devices: Task[] = [
        new Task(
                'Sensor',
                'Monitoramento de equipamentos eletro-eletrônicos.',
            )
    ];

    constructor() {}

    addNewDevice(name: string, description: string) {
        this.devices.push(new Task(
            name,
            description,
        ))
    }

    getAllDevices() {
        console.log(this.devices);
        return this.devices;
    }
}
