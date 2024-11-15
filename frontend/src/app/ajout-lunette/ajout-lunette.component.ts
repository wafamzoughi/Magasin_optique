import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LunetteService } from '../services/lunette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-lunette',
  templateUrl: './ajout-lunette.component.html',
  styleUrls: ['./ajout-lunette.component.css']
})
export class AjoutLunetteComponent implements OnInit {

  formLunette!: FormGroup;
  submitted: boolean=false;
  ListLunettes: any[]=[];

  constructor(private lunetteService: LunetteService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formLunette = this.fb.group({
      Marque: ['', Validators.required],
      Type: ['', Validators.required],
      Prix: ['', Validators.required],
      Fume: [false, Validators.required]
    })
  }
  submit(): void{
    this.lunetteService.postLunette(this.formLunette.value).subscribe(data => {
    this.route.navigate(['liste']);
    //window.location.reload();
    console.log(this.formLunette.value);},err =>{
    console.log(err)
    });
    
}


}
