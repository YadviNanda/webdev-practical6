// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played.
//
// See labwork 7 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menu = new MenuScreen();
    this.music = new MusicScreen();

    this.showMusicScreen = this.showMusicScreen.bind(this);
    document.addEventListener('open-music-screen', this.showMusicScreen);
  }
  // TODO(you): Add methods as necessary.
  showMusicScreen(event) {
    this.music.show(event.detail);
  }
}