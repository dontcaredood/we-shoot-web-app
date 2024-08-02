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
      description: 'Capture your special moments with our professional event photography services, tailored for weddings, corporate events, and more.'
    },
    {
      title: 'Videography',
      description: 'Record high-quality video memories of your important events with our expert videography services, providing cinematic and memorable footage.'
    },
    {
      title: 'Album Editing',
      description: 'Enhance your photos with our expert album editing services, ensuring each image is polished and presented beautifully.'
    },
    {
      title: 'Photo Frames',
      description: 'Preserve and display your cherished memories with our high-quality photo frames, available in various styles and sizes.'
    },
    {
      title: 'Customized Gifts',
      description: 'Create personalized gifts like custom photo albums and unique keepsakes to celebrate special moments and loved ones.'
    },
    {
      title: 'Reels Creations',
      description: 'Design engaging and visually stunning photo and video reels to showcase your memorable moments in a dynamic format.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
