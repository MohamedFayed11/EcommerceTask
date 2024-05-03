import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  imageUrl: string = "";

  @Output() createProduct = new EventEmitter<{name:string,description:string,price:number,image:string}>(); 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        console.log("image path : " + this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
    console.log(this.imageUrl);
  }

  onAddProduct() {
    this.createProduct.emit({
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.imageUrl
    });

    console.log("name : " + this.name);

  }


  

}
