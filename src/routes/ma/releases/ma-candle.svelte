<script lang="ts">
    import Album from "../album.svelte";
    import md1 from "../lyrics/ghost-rainy.md?raw"
    import md2 from "../lyrics/classroom-glow.md?raw"
    import md3 from "../lyrics/haunt-me-please.md?raw"
    import md4 from "../lyrics/for-old-light.md?raw"

    let tracks = [
        {
            "name": "Does the Ghost Like Rainy Days?",
            "duration": "4:22",
            "lyrics": md1
        },
        {
            "name": "Soft Eyes Under Classroom Glow",
            "duration": "4:16",
            "lyrics": md2
        },
        {
            "name": "Haunt Me Please",
            "duration": "4:34",
            "lyrics": md3
        },
        {
            "name": "For Old Light",
            "duration": "2:44",
            "lyrics": md4
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=noiuDgTQK9U&list=OLAK5uy_mJF4cSajYgcmGpWnbZJxlwrehtamoBJrY",
        "sp": "https://open.spotify.com/album/2VFWVR72dGFcHuzCeW5j0U",
        "it": "https://music.apple.com/us/album/candlelight-fragments-ep/1712007436"
    }
</script>

<Album
    name="Candlelight Fragments"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773"
    links={links}
    release="2023.11.11"
/>


