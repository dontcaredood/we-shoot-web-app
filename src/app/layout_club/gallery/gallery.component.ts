import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos = [
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
