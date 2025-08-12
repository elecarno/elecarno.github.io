<script lang="ts">
    import Album from "../album.svelte";
import md from "../lyrics/winter-night.md?raw"

    let tracks = [
        {
            "name": "Call Your Friends in Winter Night",
            "duration": "5:27",
            "lyrics": md
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=qar1hU0VG0M",
        "sp": "https://open.spotify.com/track/6AlIpLZ3D18Ps4mZBC7cY0",
        "it": "https://music.apple.com/us/album/call-your-names-in-winter-night-single/1720664029"
    }
</script>

<Album
    name="Call Your Names in <br> Winter Night"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db"
    links={links}
    release="2024.12.19"
/>


