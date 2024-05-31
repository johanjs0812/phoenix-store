import { Component } from '@angular/core';

@Component({
  selector: 'app-generaladmin',
  templateUrl: './generaladmin.component.html',
  styleUrls: ['./generaladmin.component.css']
})

export class GeneraladminComponent {

  dataPieChart = [
    {
      "name": "LIBOR Impact",
      "value": 80
    },
    {
      "name": "Non-LIBOR Impact",
      "value": 20
    }
  ];

  dataBarChart = [
    {
      "name": "Active",
      "value": 70
    },
    {
      "name": "Complete",
      "value": 30
    }
  ];

  dataLineChart = [
    {
      "name": "Financial Instrument 1",
      "series": [
        {
          "name": "2020",
          "value": 50
        },
        {
          "name": "2021",
          "value": 80
        }
      ]
    },
    {
      "name": "Financial Instrument 2",
      "series": [
        {
          "name": "2020",
          "value": 70
        },
        {
          "name": "2021",
          "value": 60
        }
      ]
    }
  ];

  customColors = [
    { name: 'Active', value: '#692EB7' },
    { name: 'Complete', value: '#2F2839' },
    { name: 'LIBOR Impact', value: '#692EB7' },
    { name: 'Non-LIBOR Impact', value: '#2F2839' },
    { name: 'Financial Instrument 1', value: '#692EB7' },
    { name: 'Financial Instrument 2', value: '#2F2839' },
  ];

}
