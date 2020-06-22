import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private category

  constructor(private auth:AuthService,private db:AngularFirestore) { }

  addCategory(categoryName:string){
    let category = new Category()
    category.name = categoryName
    let catObject=Object.assign({},category)
    this.db.collection("users").doc(this.auth.getUid()).collection("category").add(catObject)
  }

  deleteCategory(id){
    this.db.collection("users").doc(this.auth.getUid()).collection("category").doc(id).delete()
  }

  getAllCategories(){
    return this.db.collection("users").doc(this.auth.getUid()).collection("category").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  editCategory(category){
    this.category = category
  }

  getCategory(){
    return this.category
  }

  updateCategory(categoryName){
    this.db.collection("users").doc(this.auth.getUid()).collection("category").doc(this.category.id).update(Object.assign({},categoryName))
  }
  
}
