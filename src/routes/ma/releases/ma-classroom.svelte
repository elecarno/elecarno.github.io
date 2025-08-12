<script lang="ts">
    import Album from "../album.svelte";
    import md from "../lyrics/classroom-glow.md?raw"

    let tracks = [
        {
            "name": "Soft Eyes Under Classroom Glow",
            "duration": "4:16",
            "lyrics": md
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=0ccUTJZJBqA",
        "sp": "https://open.spotify.com/track/3UtvtmHMU2YTfhdcqZErmH",
        "it": "https://music.apple.com/us/album/soft-eyes-under-classroom-glow-single/1705710719"
    }
</script>

<Album
    name="Soft Eyes Under <br> Classroom Glow"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2"
    links={links}
    release="2023.08.05"
/>


