import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.less']
})
export class RoomComponent implements OnInit {
	messages = [
		{ text : 'hello', id : 1 }
	];

	constructor() {
		this.messages.push({text : 'waka', id : 3});
	}

	ngOnInit() {
	}

}
