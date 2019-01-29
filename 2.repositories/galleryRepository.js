function GalleryRepository() {
   
    
    this.getPictures = async function (id) {

         return new Gallery(id)

    }

}