<script lang="ts">
    import Album from "../album.svelte";
    
    let tracks = [
        {
            "name": "Brother by Heart",
            "duration": "4:44"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=zefqQorn1po",
        "sp": "https://open.spotify.com/track/6kd60HFkCMujDEEhnAGwMr",
        "it": "https://music.apple.com/us/album/brother-by-heart-single/1693113027"
    }
</script>

<Album
    name="Brother by Heart"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76"
    links={links}
    release="2023.07.01"
/>