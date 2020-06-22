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

  constructor(public modalService: NgbModal, public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res
    })
  }

  addCategory() {
    const modalRef = this.modalService.open(AddCategoryComponent,{ centered: true});
  }

  editCategory(category) {
    const modalRef = this.modalService.open(EditCategoryComponent,{ centered: true});
    this.categoryService.editCategory(category)
  }

  deleteCategory(id){
    this.categoryService.deleteCategory(id)
  }
}
