import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryId
  categoryName

  constructor(public auth:AuthService,public db:AngularFirestore) { }

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

  editCategory(categoryId,categoryName){
    this.categoryId = categoryId
    this.categoryName= categoryName
  }

  getCategoryByDocId(){
    return this.db.collection("users").doc(this.auth.getUid()).collection("category").doc(this.categoryId).valueChanges()
  }

  updateCategory(categoryName){
    this.db.collection("users").doc(this.auth.getUid()).collection("category").doc(this.categoryId).update(Object.assign({},categoryName))
  }
}
