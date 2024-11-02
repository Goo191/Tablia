import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit  {
  table:any[]=[]; 
constructor(private xx:ProductService){}
ngOnInit(): void {
this.getproducts();  
}
getproducts(){
  this.table= this.xx.tabledata;
  console.log(this.table);
}
}
