import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  items: any[] = [
    { imageUrl: 'assets/transfer/MyAccount.png', title: 'Transfer Within My Account' },
    { imageUrl: 'assets/transfer/My Bank.png', title: 'Transfer Within Bank' },
    { imageUrl: 'assets/transfer/External Transfer.png', title: 'External Transfer' },
    { imageUrl: 'assets/transfer/Beneficiary.png', title: 'Add Beneficiary' }
  ];
 
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onItemClick(title: string): void {
    switch (title) {
      case 'Transfer Within My Account':
        ("Transfer Within My Account clicked")
        this.router.navigate(['selfAccTransfer']);
        break;
      case 'Transfer Within Bank':
        ("Transfer Within Bank clicked")
        this.router.navigate(['/transferWithinBank']);
        break;
      case 'External Transfer':
        ("External Transfer clicked")
        this.router.navigate(['/external-transfer']);
        break;
      case 'Add Beneficiary':
        ("Add Beneficiary clicked")
        this.router.navigate(['add-benficiary']);
        break;
      default:
        break;
    }
  }
}