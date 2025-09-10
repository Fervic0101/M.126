import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accedi',
  imports: [CommonModule],
  templateUrl: './accedi.html',
  styleUrl: './accedi.css'
})
export class Accedi {
  // User data
  userName: string = "Marco Rossi";
  userSince: string = "Membro dal Gennaio 2023";
  
  // Statistics data
  totalSpent: number = 3427.50;
  averageMonthly: number = 285.63;
  transactions: number = 127;
  
  // Purchased products data
  purchasedProducts = [
    { name: 'Pasta', quantity: 12, percentage: 18 },
    { name: 'Latte', quantity: 24, percentage: 15 },
    { name: 'Pane', quantity: 32, percentage: 12 },
    { name: 'Frutta', quantity: 28, percentage: 10 },
    { name: 'Verdura', quantity: 25, percentage: 9 }
  ];
  
  // Supermarkets data
  supermarkets = [
    { name: 'Coop', visits: 32, percentage: 35, amount: 1250.40 },
    { name: 'Esselunga', visits: 28, percentage: 30, amount: 1105.75 },
    { name: 'Carrefour', visits: 10, percentage: 11, amount: 386.05 }
  ];
  
  // Monthly spending data
  monthlySpending = [
    { month: 'Gen', amount: 320.50 },
    { month: 'Feb', amount: 285.75 },
    { month: 'Mar', amount: 310.20 },
    { month: 'Apr', amount: 295.30 },
    { month: 'Mag', amount: 265.90 },
    { month: 'Giu', amount: 240.45 }
  ];
  
  // Recent transactions
  recentTransactions = [
    { date: '15/06/2023', supermarket: 'Coop', amount: 87.30 },
    { date: '12/06/2023', supermarket: 'Esselunga', amount: 65.50 },
    { date: '03/06/2023', supermarket: 'Carrefour', amount: 95.20 }
    
  ];
}