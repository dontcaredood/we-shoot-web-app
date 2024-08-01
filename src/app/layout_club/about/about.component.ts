import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  services = [
    {
      title: 'Event PhotoShoot',
      description: 'Capture your special moments with our professional event photography services.'
    },
    {
      title: 'Editing',
      description: 'Our expert editors will enhance your photos to make them look stunning.'
    },
    {
      title: 'Videography',
      description: 'Capture beautiful moments as high resolution video memories.'
    },
    {
      title: 'Photo Frames',
      description: 'We provide high-quality photo frames to preserve your cherished memories.'
    },
    {
      title: 'Albums',
      description: 'Create beautiful photo albums to relive your favorite moments.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
