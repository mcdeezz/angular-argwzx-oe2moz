import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: "autocomplete-display-example",
  templateUrl: "autocomplete-display-example.html",
  styleUrls: ["autocomplete-display-example.css"]
})
export class AutocompleteDisplayExample {
  generalForm: FormGroup;
  languages = [
    {
      id: 1,
      element: "english",
      value: "eng",
      name: "English"
    },
    {
      id: 2,
      element: "telugu",
      value: "tel",
      name: "Telugu"
    }
  ];

  constructor() {
    for (let i = 0; i < 99999; i++) {
      this.languages.push({
        id: i + 3,
        element: "English" + i,
        value: "eng" + i,
        name: "English" + i
      });
    }
    this.generalForm = new FormGroup({
      language: new FormControl()
    });
  }

  selectedOption($event:any){
    console.log($event)
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
