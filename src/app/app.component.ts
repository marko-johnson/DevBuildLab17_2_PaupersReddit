import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reddit } from './reddit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersReddit';
  data?: Reddit;

  constructor(private http: HttpClient) {	}

	getData() {
		this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(
			(result: Reddit) => {
				this.data = result;
				console.log(this.data);			
			}
		);
	}

}

