<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Parallels",
            "duration": "4:02"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=S73H33-I21o",
        "sp": "https://open.spotify.com/track/02D9jPrNetIFelcDvrmDmH",
        "it": "https://music.apple.com/us/album/parallels-single/1692112083"
    }
</script>

<Album
    name="Parallels"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6"
    links={links}
    release="2023.07.10"
/>