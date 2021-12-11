import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../services/itunes.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  searchTerm: string = '';

  constructor(private ItunesService: ItunesService) {}

  ngOnInit(): void {}

  changeText() {
    this.ItunesService.setCurrentSong('cambiamento');
  }
}
