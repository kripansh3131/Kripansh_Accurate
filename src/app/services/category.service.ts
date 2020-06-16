import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[]=[{name:"Food"},{name:"Entertainment"}]
  id:string

  constructor() { }

  addCategory(categoryName:string){
    let category = new Category()
    category.name = categoryName
    this.categories.push(category)
    console.log(this.categories)
  }

  deleteCategory(id){
    this.categories.splice(id,1)
  }

  getAllCategories(){
    return this.categories
  }

  getId(id){
    this.id=id
  }

  editCategory(categoryName){
    this.categories[this.id].name = categoryName
  }
}
