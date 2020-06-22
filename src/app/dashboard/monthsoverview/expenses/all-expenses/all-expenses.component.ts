import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { EditExpensesComponent } from '../edit-expenses/edit-expenses.component';
import { ExpenseService } from 'src/app/services/expense.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent implements OnInit {

  expenses=[]

  constructor(private modalService: NgbModal,public expenseService:ExpenseService,public db:AngularFirestore,public auth:AuthService) { }

  ngOnInit(): void {
    this.expenseService.getAllExpenses().subscribe(res=>{
      this.expenses = res
      for (let index = 0; index < this.expenses.length; index++) {
        this.db.collection("users").doc(this.auth.getUid()).collection("category").doc(this.expenses[index].category.id).valueChanges().subscribe(res=>{
          this.expenses[index].category = res
        })
      }
    })
  }

  openAddExpense() {
    const modalRef = this.modalService.open(AddExpensesComponent,{ centered: true});
  }

  openEditExpense(expense) {
    this.expenseService.editExpense(expense)
    const modalRef = this.modalService.open(EditExpensesComponent,{ centered: true});
  }

  deleteExpense(id){
    this.expenseService.deleteExpense(id)
  }
}
