import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryName:string

  constructor(public activeModal: NgbActiveModal,public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryName = this.categoryService.categories[this.categoryService.id].name
  }

}
