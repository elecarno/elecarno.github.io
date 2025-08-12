<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Shimmering Flower",
            "duration": "3:31"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=2KeM0xMxMPI",
        "sp": "https://open.spotify.com/track/6I5FOVuSmSs0Al1Xq4ZLGT",
        "it": "https://music.apple.com/us/album/shimmering-flower-single/1694204258"
    }
</script>

<Album
    name="Shimmering Flower"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f"
    links={links}
    release="2023.07.29"
/>


