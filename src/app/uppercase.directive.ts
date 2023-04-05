import { Directive, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Directive({
  selector: "[uppercase]",
  //HOST LISTENS TO THE VALUE AND ASSIGNS IT TO UPPERCASE VARIABLE AND LISTENS TO ANY CHANGE IN THE INPUT AND
  //TRIGGERS FORMAT METHOD TO CONVERT THE VALUE WHENEVER THERE IS A CHANGE
  host: {
    "[value]": "uppercase",
    "(input)": "format($event.target.value)"
  }
})
export class UppercaseDirective implements OnInit {
  constructor() {}

  //ACCEPTS THE VALUE IN THE INPUT FIELD
  @Input("uppercase") uppercase;

  //EMITS THE TRANSFORMED VALUE
  @Output() uppercaseChange: EventEmitter<string> = new EventEmitter<string>();

  //TRIGGERING THE FIRST TRANSFORM
  ngOnInit() {
    this.uppercase = this.uppercase ? this.uppercase : "";
    this.format(this.uppercase);
  }

  //METHOD TO FORMAT THE INPUT VALUE INTO UPPER CASE
  format(value) {
    console.error(value);
    this.uppercaseChange.next(value.toUpperCase());
  }
}
