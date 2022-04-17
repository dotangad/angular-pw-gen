import { Component, Input, OnInit } from '@angular/core';
import { from, take, timer } from 'rxjs';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent implements OnInit {
  @Input() password?: string;
  @Input() error?: string;
  message?: string;

  constructor() {}

  ngOnInit(): void {}

  onCopy() {
    if (this.password) {
      const copied = from(navigator.clipboard.writeText(this.password));
      copied.pipe(take(1)).subscribe(
        () => {
          this.message = 'Copied to clipboard';
          timer(1500).subscribe(() => (this.message = undefined));
        },
        () => (this.message = 'Failed to copy to clipboard')
      );
    }
  }
}
