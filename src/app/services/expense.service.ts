import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expense

  constructor(private auth:AuthService,private db:AngularFirestore,private categoryService:CategoryService) { }

  addExpense(expense:Expense){
    let expenseObject=Object.assign({},expense)
    this.db.collection("users").doc(this.auth.getUid()).collection("expenses").add(expenseObject)
  }

  deleteExpense(id){
    this.db.collection("users").doc(this.auth.getUid()).collection("expenses").doc(id).delete()
  }

  getAllExpenses(){
    return this.db.collection("users").doc(this.auth.getUid()).collection("expenses").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUserCategories(){
    return this.categoryService.getAllCategories()
  }

  editExpense(expense){
    this.expense = expense
  }

  getExpense(){
    return this.expense
  }

  updateExpense(expense){
    this.db.collection("users").doc(this.auth.getUid()).collection("expenses").doc(this.expense.id).update(Object.assign({},expense))
  }
  
}