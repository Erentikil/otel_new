class Room {
    constructor(roomName, roomUrlName, roomImgUrl, roomDescription, id, createdDate, updatedDate, deletedDate) {
      this.roomName = roomName;
      this.roomUrlName = roomUrlName;
      this.roomImgUrl = roomImgUrl;
      this.roomDescription = roomDescription;
      this.id = id;
      this.createdDate = new Date(createdDate);
      this.updatedDate = new Date(updatedDate);
      this.deletedDate = new Date(deletedDate);
    }
  }