import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-edit-expenses',
  templateUrl: './edit-expenses.component.html',
  styleUrls: ['./edit-expenses.component.css']
})
export class EditExpensesComponent implements OnInit {

  expense
  userCategories :any []

  constructor(public activeModal: NgbActiveModal,public expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.expense = this.expenseService.getExpense()
    this.expenseService.getUserCategories().subscribe(res=>{
      this.userCategories = res
    })
  }

  updateExpense(){
    this.expenseService.updateExpense(this.expense)
  }

}
