<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "When Silent Was Joy",
            "duration": "4:02"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=6tOfbpyMhEc",
        "sp": "https://open.spotify.com/track/1EfwWVlkS6iZFJkffmTlcQ",
        "it": "https://music.apple.com/us/album/when-silent-was-joy-single/1690783575"
    }
</script>

<Album
    name="When Silent Was Joy"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0"
    links={links}
    release="2023.06.17"
/>