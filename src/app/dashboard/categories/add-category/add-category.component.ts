import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryName:string

  constructor(public activeModal: NgbActiveModal, public categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.addCategory(this.categoryName)
  }

}
