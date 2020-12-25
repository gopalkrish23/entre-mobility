import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {

  productForm: FormGroup;
  manufaturingForm: FormGroup;
  digitalForm: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.productForm = this.initProductForm();
    this.productForm.disable();
    this.manufaturingForm = this.initManufacturingForm();
    this.manufaturingForm.disable();
    this.digitalForm = this.initDigitalForm();
    this.digitalForm.disable();
    
  }

  ngOnInit() {}

  initProductForm(){
    return new FormGroup({
      busbody: new FormControl('', [Validators.required]),
      truckloadBodyIntegration: new FormControl('', [Validators.required]),
      container: new FormControl('', [Validators.required]),
      prototype: new FormControl('', [Validators.required]),
      trailer: new FormControl('', [Validators.required]),
      tiptrailer: new FormControl('', [Validators.required]),
      electricalvehicleIntegration: new FormControl('', [Validators.required]),
      electricalwiringharness: new FormControl('', [Validators.required]),
      CAD: new FormControl('', [Validators.required]),
      structuralAnalysis: new FormControl('', [Validators.required]),
      vehicleIntegration: new FormControl('', [Validators.required]),
      benchmarkingCompitorVehicle: new FormControl('', [Validators.required]),
      plumSupport: new FormControl('', [Validators.required]),
      va_ve: new FormControl('', [Validators.required])
    })
  }

  initManufacturingForm(){
    return new FormGroup({
      plastic: new FormControl('', [Validators.required]),
      sheetMetal: new FormControl('', [Validators.required]),
      structural: new FormControl('', [Validators.required]),
      alumniumParts: new FormControl('', [Validators.required]),
      specialPurpose: new FormControl('', [Validators.required]),
      trolley: new FormControl('', [Validators.required])
    })
  }

  initDigitalForm(){
    return new FormGroup({
      ocr: new FormControl('', [Validators.required]),
      dataProcess: new FormControl('', [Validators.required]),
      script: new FormControl('', [Validators.required]),
      excelWord: new FormControl('', [Validators.required]),
      os: new FormControl('', [Validators.required]),
      py: new FormControl('', [Validators.required]),
      dataProcessing: new FormControl('', [Validators.required]),
      cadtool_customization: new FormControl('', [Validators.required])
    })
  }

}
