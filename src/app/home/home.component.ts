import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ITunesResponse } from 'src/module/iTunes';
import { ItunesService } from '../services/itunes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  text: string | undefined = 'ciao';
  result: string[] = ['ciao', 'prova'];

  constructor(private ItunesService: ItunesService) {}

  ngOnInit(): void {
    this.text = this.ItunesService.getCurrentSong();
    console.log(this.result);
  }

  getText = () => this.ItunesService.getCurrentSong();
}
