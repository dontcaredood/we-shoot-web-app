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
    { url: 'assets/images/mirrors 4.png', title: 'Photo 3' },
    { url: 'assets/images/mirrors 6.png', title: 'Photo 4' },
    { url: 'assets/images/mirrors 5.png', title: 'Photo 5' },
    { url: 'assets/images/mirrors 7.png', title: 'Photo 6' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 7' },
    { url: 'assets/images/photo2.jpeg', title: 'Photo 2' },
    { url: 'assets/images/photo1.jpeg', title: 'Photo 1' }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openModal(photoUrl: string) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01') as HTMLImageElement;
    const captionText = document.getElementById('caption');

    if (modal && modalImg && captionText) {
      modal.style.display = 'block';
      modalImg.src = photoUrl;
      captionText.innerHTML = photoUrl.split('/').pop() || '';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

}
