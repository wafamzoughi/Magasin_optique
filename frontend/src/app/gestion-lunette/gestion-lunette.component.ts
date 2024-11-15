import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LunetteService } from '../services/lunette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-lunette',
  
  templateUrl: './gestion-lunette.component.html',
  styleUrls: ['./gestion-lunette.component.css']
})
export class GestionLunetteComponent implements OnInit {
  lunettes: any []=[];
  selectedLunette: any;
  showUpdateForm: boolean = false;
  form!: FormGroup;
  submitted: boolean =false;
 
  constructor( private fb:FormBuilder, private lunetteService: LunetteService ,
    
    private router: Router)
     {}

  

  ngOnInit(): void {
    this.loadListLunettes();
    this.form = this.fb.group ({
      departmentName:['', Validators.required]
    });
  }
  loadListLunettes(): void {

  this.lunetteService.getListLunettes().subscribe((data: any) =>{
    console.log(data);
    this.lunettes.push(...data);
  },
    ( err: any)=>console.log(err));
}


onSubmit(): void {
  
}
deleteLunette(lunette: any): void {
  if (confirm('Are you sure you want to delete this lunette?')) {
  this.lunetteService.deleteLunette(lunette.id).subscribe(
  () => {
  console.log('Lunette deleted successfully');
  const index = this.lunettes.indexOf(lunette);
  if (index !== -1) {
  this.lunettes.splice(index, 1);
  }
  },
  (err) => console.log(err)
  );
  }
  }
  editLunette(lunette: any): void {
    this.router.navigate(['/edit-lunette', lunette.id]);
  }

  
  
}



