import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-baby-details',
  templateUrl: './show-baby-details.component.html',
  styleUrls: ['./show-baby-details.component.scss']
})
export class ShowBabyDetailsComponent implements OnInit {
  loadData = {};
  loadDataUrl = 'https://babys-diary.herokuapp.com/api/baby-diary';

  constructor(private _http: HttpClient) {}

  ngOnInit() {
      this.loadBabyData();
  }

  loadBabyData() {
    this._http.get(this.loadDataUrl).subscribe(data => {
        console.log(data['data']);
      this.loadData = data['data'];
    });
  }
}
