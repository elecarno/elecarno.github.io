<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Fall in Simile",
            "duration": "3:31"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=W59dYm4CPaI",
        "sp": "https://open.spotify.com/track/6OW8skRtKVOP9TKUYoYXc3",
        "it": "https://music.apple.com/us/album/fall-in-simile-single/1694203979"
    }
</script>

<Album
    name="Fall in Simile"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e"
    links={links}
    release="2023.07.29"
/>


