import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category

  constructor(public activeModal: NgbActiveModal,public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.category = this.categoryService.getCategory()
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category)
  }

}
