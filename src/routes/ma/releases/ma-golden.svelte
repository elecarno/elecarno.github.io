<script lang="ts">
    import Album from "../album.svelte";
    import md from "../lyrics/golden-friend.md?raw"

    let tracks = [
        {
            "name": "Golden Friend of Silver Water",
            "duration": "4:14",
            "lyrics": md
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=zk0C53CZvKU",
        "sp": "https://open.spotify.com/track/0tTIVp3AL7WfmTg2QsVoEC",
        "it": "https://music.apple.com/us/album/golden-friend-of-silver-water-single/1723646587"
    }
</script>

<Album
    name="Golden Friend of <br> Silver Water"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd"
    links={links}
    release="2024.02.02"
/>


