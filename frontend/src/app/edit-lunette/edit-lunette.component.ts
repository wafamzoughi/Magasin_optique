
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LunetteService } from '../services/lunette.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-lunette',
  templateUrl: './edit-lunette.component.html',
  styleUrls: ['./edit-lunette.component.css']
})

export class EditLunetteComponent implements OnInit {
  url: string = '';
  formLunette!: FormGroup;
  submitted: boolean = false;
  lunetteId!: string;

  constructor(private fb: FormBuilder, private lunetteService: LunetteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.formLunette = this.fb.group({
      Marque: ['', Validators.required],
      Type: ['', Validators.required],
      Prix: ['', Validators.required],
      Fume: [false, Validators.required]
    });
   

    // Get shoes ID from route params
    this.route.params.subscribe(params => {
      this.lunetteId = params['id'];
      // Fetch shoes details using shoesId and populate the form
      this.lunetteService.getLunettes(this.lunetteId).subscribe(
        lunette => {
          this.formLunette.patchValue({
            Marque: lunette.Marque,
            Type: lunette.Type,
            Prix: lunette.Prix,
            Fume: lunette.Fume,
            
          });
        },
        error => {
          console.error('Error fetching lunettes details:', error);
        }
      );
    });
  }
  onselectFile(e:any){
    if(e.target.files){
       var reader =new FileReader();
       reader.readAsDataURL(e.target.files[0]);
       reader.onload=(event:any) =>{
         this.url=event.target.result;
       }

    }
 }

  submit(): void {
    this.submitted = true;
    if (this.formLunette.invalid) {
      return;
    }

    // Call service to update sejour
    this.lunetteService.updateLunette(this.lunetteId, this.formLunette.value).subscribe(
      data => {
        console.log('Lunettte updated successfully:', data);
        this.router.navigate(['/liste']); // Redirect to sejour list after successful update
      },
      error => {
        console.error('Error updating lunette:', error);
      }
    );
  }
}
