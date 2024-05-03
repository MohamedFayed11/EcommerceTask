import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-task';
  products: any = [
    {
      name: 'DELL G15 5530 Gaming Laptop',
      price: 78.089,
      description: 'DELL G15 5530 Gaming Laptop - 13th Intel Core i7-13650HX 14 Cores, NVIDIA GeForce RTX 4050 6GB GDDR6 Graphics, 8GB DDR5-4800 MHz RAM, 1TB SSD, 15.6" FHD (1920x1080) 120Hz, Backlit Keyboard, Windows 11',
      image: 'assets/images/1.jpg'
    },
    {
      name: 'Lenovo V15 Laptop',
      price: 4.999,
      description: 'Lenovo V15 Laptop - Intel Core i3-10110U, 8GB RAM, 1TB HDD, Integrated Intel UHD Graphics, 15.6" HD (1366x768) TN 220nits Anti-glare, Dos - Iron Grey',
      image: 'assets/images/2.jpg'
    },
    {
      name: 'HP Laptop 15S-FQ5048NE (6L8K8EA)',
      price: 19.999,
      description: 'HP Laptop 15S-FQ5048NE (6L8K8EA), Intel Core i3 - 1215U, 12th Generation, 4GB DDR4, 256GB SSD, Windows 11 Home Single Language - Black',
      image: 'assets/images/3.jpg'
    },
    {
      name: 'HP Laptop 15S-FQ5048NE (6L8K8EA)',
      price: 19.999,
      description: 'HP Laptop 15S-FQ5048NE (6L8K8EA), Intel Core i3 - 1215U, 12th Generation, 4GB DDR4, 256GB SSD, Windows 11 Home Single Language - Black',
      image: 'assets/images/3.jpg'
    },
    {
      name: 'HP Laptop 15S-FQ5048NE (6L8K8EA)',
      price: 19.999,
      description: 'HP Laptop 15S-FQ5048NE (6L8K8EA), Intel Core i3 - 1215U, 12th Generation, 4GB DDR4, 256GB SSD, Windows 11 Home Single Language - Black',
      image: 'assets/images/3.jpg'
    },
    {
      name: 'HP Laptop 15S-FQ5048NE (6L8K8EA)',
      price: 19.999,
      description: 'HP Laptop 15S-FQ5048NE (6L8K8EA), Intel Core i3 - 1215U, 12th Generation, 4GB DDR4, 256GB SSD, Windows 11 Home Single Language - Black',
      image: 'assets/images/3.jpg'
    },
  ];

  onCreateProduct(product: {name:string,description:string,price:number,image:string}){
    this.products.unshift({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    });

  }

}
