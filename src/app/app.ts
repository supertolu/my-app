import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductList} from './product-list/product-list';
import { ProductCard } from './product-card/product-card';
import { DataForm } from './data-form/data-form';
import { DataList } from './data-list/data-list';
@Component({
  selector: 'app-root',
  imports: [DataForm,DataList,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
  
})
export class App {
  protected readonly title = signal('my-app');
}
