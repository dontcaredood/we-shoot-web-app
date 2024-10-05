import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos = [
    //wedding 
    { url: 'assets/images/wedding1.jpg', title: 'Wedding' },
    { url: 'assets/images/wedding2.jpg', title: 'Wedding' },
    { url: 'assets/images/wedding3.jpg', title: 'Wedding' },
    { url: 'assets/images/wedding4.jpg', title: 'Wedding' },
    //model
    { url: 'assets/images/model1.jpg', title: 'Model Shoot' },
    { url: 'assets/images/model2.jpg', title: 'Model Shoot' },
    { url: 'assets/images/model3.jpg', title: 'Model Shoot' },
    { url: 'assets/images/model4.jpg', title: 'Model Shoot' },
    //groom-wedding
    { url: 'assets/images/groom1.jpg', title: 'Groom' },
    { url: 'assets/images/groom2.jpg', title: 'Groom' },
    { url: 'assets/images/groom3.jpg', title: 'Groom' },
    { url: 'assets/images/groom4.jpg', title: 'Groom' },
    //model
    { url: 'assets/images/photo3.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo4.jpg', title: 'Model Shoot' },
    { url: 'assets/images/model2_3.jpg', title: 'Model Shoot' },
    { url: 'assets/images/model2_4.jpg', title: 'Model Shoot' },
    //wedding 
    { url: 'assets/images/wedding5.jpg', title: 'Wedding' },
    { url: 'assets/images/wedding6.jpg', title: 'Wedding' },
    { url: 'assets/images/wedding7.JPG', title: 'Wedding' },
    { url: 'assets/images/wedding8.jpg', title: 'Wedding' },
    //model
    { url: 'assets/images/photo9.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo10.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo11.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo12.jpg', title: 'Model Shoot' },

    //wedding 
    { url: 'assets/images/bride1.jpg', title: 'Bride' },
    { url: 'assets/images/bride2.jpg', title: 'Bride' },
    { url: 'assets/images/bride3.jpg', title: 'Bride' },
    { url: 'assets/images/bride4.jpg', title: 'Bride' },
    //model
    
    { url: 'assets/images/photo13.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo14.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo15.jpg', title: 'Model Shoot' },
    { url: 'assets/images/photo16.jpg', title: 'Model Shoot' },
    
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
