import { Component, 
  OnInit,
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 3 Types:Emulated, None, Native
  //its made to set the ViewEncapsulation model. If we set None, the css will serve for cockpit f.e
})
export class ServerElementComponent implements OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;// Got it from the html
  @ContentChild('contentParagraph') paragraph: ElementRef;// Got it from the App.component.html inside selector

  constructor() {
    console.log('constructor called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('textContent:'+this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  } 

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('textContent:'+this.header.nativeElement.textContent);    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
