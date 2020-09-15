import createAlbumList from "../../components/AlbumList";

import * as albumService from "../../service/albumService";

const PageAlbuns = async () => {
  try {
    let allAlbuns = await albumService.getAllAlbuns();

    const albumListContainer = document.createElement("div");
    const albumList = createAlbumList(allAlbuns);

    albumListContainer.append(albumList);

    document.body.append(albumListContainer);
  } catch (error) {
    console.log("Deu ruim!", error);
  }
};

export default PageAlbuns;
