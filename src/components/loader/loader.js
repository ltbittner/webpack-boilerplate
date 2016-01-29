let _loaderInstance = null;
class TBLoader {
  constructor(args = null){
    //Make a singleton instance
    if(!_loaderInstance) {
      _loaderInstance = this;
    }

    this.preloadQueue = null;
    this.backgroundQueue = null;

    this.totalNumberOfPreloadAssets = 0;
    this.numberOfPreloadedAssets = 0;
    
    this.preloadedAssets = {
      images: [],
      videos: []
    };

    this.loadRestInBackground = false || args.loadRestInBackground;

    this.preloadProgressCallback = args.preloadProgressCallback || null;
    this.preloadCompletedCallback = args.preloadCompletedCallback || null;
    this.autoStartBackgroundLoad = true || args.autoStartBackgroundLoad;

    
    if(args.preload){
      this.initializePreloadQueue(args.preload);
    }
    
    if(args.backgroundLoad) {
      this.initializeBackgroundQueue(args.backgroundLoad);
    } 

    return _loaderInstance;
  }

  startLoad() {
    console.log('start');
    if(this.preloadQueue){
      window.setTimeout(this.startPreload.bind(this), 100);
      //this.startPreload();
    }
  }

  initializePreloadQueue(args) {
    if(args == null || !args){
      return;
    }
    this.preloadQueue = [];
    for(let asset of args) {
      if((/\.(gif|jpg|jpeg|tiff|png)$/i).test(asset)) {
        this.preloadQueue.push({
          type: 'image',
          src: asset,
        });
       
      }

      this.totalNumberOfPreloadAssets++;
      
    }
    
    console.log('initializePreloadQueue');
  }

  initializeBackgroundQueue(args) {

    if(args == null || !args){
      return; 
    }

    this.backgroundQueue = [];

    if(this.loadRestInBackground) {
      //TODO
    } else {
      
    }

    console.log('initializeBackgroundQueue');
  }

  startPreload() {
    for(let asset of this.preloadQueue) {
      if(asset.type == 'image') {
        var image = new Image();
        image.onload = this.preloadProgressHandler.bind(this);
        //image.addEventListener("load", this.preloadProgressHandler.bind(this), false);
        image.addEventListener("error", this.errorHandler.bind(this), false);
        //image.src = require(asset.src);
        image.src = asset.src + "?_=" + (new Date().getTime());
        this.preloadedAssets.images.push(image);
      }
    }
  }

  startBackgroundLoad() {

  }

  preloadProgressHandler() {
    console.log("preloadProgressHandler");
    this.numberOfPreloadedAssets++;
 
    
    if(this.preloadProgressCallback) {
      let data = {
        completed: this.numberOfPreloadedAssets,
        total: this.totalNumberOfPreloadAssets,
        percentage: ((this.numberOfPreloadedAssets / this.totalNumberOfPreloadAssets) * 100)
      };

      this.preloadProgressCallback(data);
    }
    

    if(this.numberOfPreloadedAssets == this.totalNumberOfPreloadAssets) {

    }
  }

  backgroundProgressHandler(progress) {

  }

  preloadCompletedHandler() {

  }

  backgroundCompletedHandler() {

  }

  errorHandler() {
    console.log("An error occured");
  }
}

export default TBLoader;
