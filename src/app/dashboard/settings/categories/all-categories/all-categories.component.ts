import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categories=[]

  constructor(private modalService: NgbModal, public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categories=this.categoryService.getAllCategories()
  }

  addCategory() {
    const modalRef = this.modalService.open(AddCategoryComponent,{ centered: true});
  }

  editCategory(id) {
    const modalRef = this.modalService.open(EditCategoryComponent,{ centered: true});
    this.categoryService.getId(id)
  }
}
