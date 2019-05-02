const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "江湖天下",
        artist: '汪苏泷',
        mutex: true,
        theme: '#58f3bd',
        autoplay: true,
        listMaxHeight: 60,
        
        url: 'http://www.ytmp3.cn/down/53337.mp3',
        cover: '/images/music.png',
      }
    ]
});