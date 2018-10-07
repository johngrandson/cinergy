import { Injectable } from '@angular/core';
import { Device } from './devices.model';

@Injectable()
export class DevicesService {

    public devices: Device[] = [
        new Device(
            'Sensor',
            'Monitoramento de equipamentos eletro-eletrônicos.',
        )
    ];

    constructor() { }

    addNewDevice(name: string, description: string) {
        this.devices.push(new Device(
            name,
            description,
        ))
    }

    getAllDevices() {
        console.log(this.devices);
        return this.devices;
    }
}
