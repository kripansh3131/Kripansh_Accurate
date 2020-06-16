import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { EditExpensesComponent } from '../edit-expenses/edit-expenses.component';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css']
})
export class AllExpensesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

openAddExpense() {
  const modalRef = this.modalService.open(AddExpensesComponent,{ centered: true});
}

openEditExpense() {
  const modalRef = this.modalService.open(EditExpensesComponent,{ centered: true});
}

}
