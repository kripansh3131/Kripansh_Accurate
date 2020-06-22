import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  expense=new Expense()
  userCategories :any []

  constructor(public activeModal: NgbActiveModal,public expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getUserCategories().subscribe(res=>{
      this.userCategories = res
    })
  }

  addExpense(){
    this.expenseService.addExpense(this.expense)
  }

}
