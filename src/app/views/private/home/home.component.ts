import { Component } from '@angular/core';

import { ModalService } from 'ngx-modal-ease';
import { AddMarkerModalComponent } from '../add-marker-modal/add-marker-modal.component';

export interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  };
  label: string;
  zIndex: number;
  icon?: string;
  map?: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -23.544818579863364,
    lng: -46.5931478014823,
  };
  zoom = 17;
  markers: MarkerProperties[] = [
    {
      position: {
        lat: -23.54432679706785,
        lng: -46.593609141410425,
      },
      label: 'Nome FOda',
      zIndex: 100,
    },
    {
      position: {
        lat: -23.54520216916703,
        lng: -46.59564762016256,
      },
      label: 'Nome Legal',
      zIndex: 100,
    },
    {
      position: {
        lat: -23.544474332099618,
        lng: -46.59189252772442,
      },
      label: 'Opaaa',
      zIndex: 100,
    },
  ];

  map?: google.maps.Map;

  selectedPosition: MarkerProperties | null = null;

  constructor(private modalService: ModalService) {}

  handleMapInitialized(map: google.maps.Map) {
    this.map = map;
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        zIndex: marker.zIndex,
        map,
      });
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const curLoc = event.latLng.toJSON();

      const currentPosition: MarkerProperties = {
        position: { lat: curLoc.lat, lng: curLoc.lng },
        label: '',
        zIndex: 100,
        map: this.map,
      };
      this.openModal(currentPosition);
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  openModal(currentPosition: MarkerProperties) {
    this.modalService
      .open(AddMarkerModalComponent, {
        modal: {
          // animation
          enter: 'enter-scale-down 0.1s ease-out',
        },
        overlay: {
          // animation
          leave: 'fade-out 0.3s',
        },
        size: {
          // modal configuration
          width: '400px',
        },
        data: {
          // data to ModalContentComponent
          selectedPosition: currentPosition,
        },
      })
      .then((event: any) => {
        if (event) {
          this.markers.push(event);
          this.markers.forEach((marker: MarkerProperties) => {
            new google.maps.Marker({
              position: marker.position,
              label: marker.label,
              zIndex: marker.zIndex,
              map: this.map,
            });
          });
        }
      });
  }
}
