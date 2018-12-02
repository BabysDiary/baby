import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-baby-details',
  templateUrl: './update-baby-details.component.html',
  styleUrls: ['./update-baby-details.component.scss']
})
export class UpdateBabyDetailsComponent implements OnInit {
  babyObject: any;
  selectedPath: File = null;
  apiBabyDetails: 'https://babys-diary.herokuapp.com/api/baby-diary';
  babyId = '';

  constructor(
    private _http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.babyObject = {};
    this.activatedRoute.queryParams.subscribe(params => {
      this.babyId = params['id'];
      console.log(this.babyId);
    });
  }

  fileSelected(event) {
    this.selectedPath = <File>event.target.files[0];
    console.log('this selected path', this.selectedPath);
  }

  updateBabyDetails(inputs: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', this.babyObject.title);
    formData.append('description', this.babyObject.description);
    formData.append('babyImage', this.selectedPath, this.selectedPath.name);

    return this._http.put<any[]>('https://babys-diary.herokuapp.com/api/baby-diary?id='+this.babyId,
      formData
    );
  }

  subscribeBabyDetails(): void {
    this.updateBabyDetails(this.babyObject).subscribe(
      data => {
        console.log('Details Uploaded', data);
        swal('Update Successful', "Baby's details updated Successfully !");
      },
      error => {
        swal('Failed to Update details! Try after sometime!');
      }
    );
  }
}
