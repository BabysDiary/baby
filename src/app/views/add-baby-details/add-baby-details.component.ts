import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-baby-details',
  templateUrl: './add-baby-details.component.html',
  styleUrls: ['./add-baby-details.component.scss']
})
export class AddBabyDetailsComponent implements OnInit {
  babyObject: any;
  selectedPath: File = null;
  apiBabyDetails: 'https://babys-diary.herokuapp.com/api/baby-diary';
  fileList = [];
  previewImage = '';
  previewVisible = false;

  ngOnInit() {
    this.babyObject = {};
  }
  constructor(private _http: HttpClient, private msg: NzMessageService) {}

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
      swal("Upload Successful", "Baby's details uploaded Successfully !");
    },
    (error)=>{
        swal("Failed to Upload details! Try after sometime!");
    }
    );
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
}
