import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-3',
  imports: [RouterLink],
  templateUrl: './module-3.html',
  styleUrl: './module-3.scss',
})
export class Module3Component {
  isVideoPlaying = false;

  openAndPlayVideo(
    toggle: HTMLInputElement,
    video: HTMLVideoElement,
    event: MouseEvent,
  ): void {
    event.preventDefault();
    event.stopPropagation();
    toggle.checked = true;
    this.playVideo(video);
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => undefined);
  }

  pauseVideo(video: HTMLVideoElement): void {
    video.pause();
    this.isVideoPlaying = false;
  }

  toggleVideoPlayback(video: HTMLVideoElement, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (video.paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }
}
