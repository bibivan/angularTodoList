import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";
import { WarningMessageDirective } from '../../derectives/warning-message.directive';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
  }

}
