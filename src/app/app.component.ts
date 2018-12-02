import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  babyObject: any;
  selectedPath: File = null;
  apiBabyDetails: 'https://babys-diary.herokuapp.com/api/baby-diary';

  ngOnInit() {
    this.babyObject = {};
  }

  constructor(private _http: HttpClient) {}

  fileSelected(event) {
    this.selectedPath = <File>event.target.files[0];
    console.log('this selected path', this.selectedPath);
  }

  postBabyDetails(inputs: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', this.babyObject.title);
    formData.append('description', this.babyObject.description);
    formData.append('babyImage', this.selectedPath, this.selectedPath.name);

    return this._http.post<any[]>(
      'https://babys-diary.herokuapp.com/api/baby-diary',
      formData
    );
  }

  subscribeBabyDetails(): void {
    this.postBabyDetails(this.babyObject).subscribe(data => {
      console.log('Details Uploaded', data);
    });
  }
}
