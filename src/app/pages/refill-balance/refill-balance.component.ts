import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RefillBalanceService } from './refill-balance.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccesOrErrorDialog } from './success-or-error-dialog/success-or-error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refill-balance',
  templateUrl: './refill-balance.component.html',
  styleUrls: ['./refill-balance.component.scss']
})
export class RefillBalanceComponent implements OnInit {

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
  ]);

  sumFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/\d/),
    Validators.min(1),
    Validators.max(1000),
  ])

  public form: FormGroup = new FormGroup({
    number: this.sumFormControl,
    email: this.numberFormControl,
  });

  constructor(
    private _refillBalanceService: RefillBalanceService,
    public dialog: MatDialog,
    public router: Router,
    private _fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  pay() {
    this.route.params.subscribe(queryParams => {
      this._refillBalanceService.pay(+queryParams.id, this.sumFormControl.value, this.numberFormControl.value).subscribe(result => {
        this.dialog.open(SuccesOrErrorDialog, {
          data: {
            success: result.success
          }
        }).afterClosed().subscribe(_ => {
          if (result.success) {
            this.router.navigate(['']);
          }
        });
      });
    });
  }

}
