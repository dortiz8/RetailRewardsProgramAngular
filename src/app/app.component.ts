import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RewardsProgramService } from '../services/rewardsProgramService'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public users?: Users[];
  rewardsService = RewardsProgramService; 
  // Move this to a service... 
  constructor(http: HttpClient) {
    http.get<Users[]>('/users').subscribe(result => {
      this.users = result;
      console.log(this.users, " ----->"); 
    }, error => console.error(error));
  }

  title = 'Retail Rewards Program';
}

interface Users {
  name: string;
  phoneNumber: number;
  purchaseHistory: Purchase[];
  id: number;
  points: number; 
}

interface Purchase {
  id: number,
  productName: string;
  monthDate: Date;
  cost: number; 
  userId: number
}
