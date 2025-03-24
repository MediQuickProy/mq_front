import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [
    CommonModule
  ]
})
export class SignUpComponent implements AfterViewInit, OnDestroy {
  showModal: boolean = false;
  modalInBody: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @ViewChild('formContainer') formContainer!: ElementRef;
  send(){
    const inputs = this.formContainer.nativeElement.querySelectorAll('input');
    const datos: any = {};

    inputs.forEach((input: HTMLInputElement) => {
      datos[input.id] = input.value;
      input.value = "";
    });
    this.showModal = true;
  }

  ngAfterViewInit() {
    const modalElement = this.el.nativeElement.querySelector('.modal');
    if (modalElement) {
      this.renderer.appendChild(document.body, modalElement);
      modalElement.hidden = false;
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngOnDestroy() {
    const modalElement = this.el.nativeElement.querySelector('.modal');
    if (modalElement) {
      this.renderer.removeChild(document.body, modalElement);
    }
  }
}
