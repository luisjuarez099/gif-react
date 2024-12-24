
export const getGifts = async( category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=RWRhyRWdQsRtRk1Xp8A981WYWb3luaP8&q=${category}&limit=5`;
    const res =  await fetch(url);
    const {data = []} = await res.json();


    const gifts = data.map((imgs)=>(
        {
            id: imgs.id,
            title: imgs.title,
            url: imgs.images.downsized_medium.url
        }
    ))

   
    return gifts;
  }