<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Typewriter Hands",
            "duration": "3:52"
        },
        {
            "name": "The Poetry Game",
            "duration": "4:35"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=_qhyW86IwY8&list=OLAK5uy_l6KFvvznP5enJK7z_ZlNWTrdHUUeFi1P0",
        "sp": "https://open.spotify.com/album/01H8fvUrWGOhNw2IsoLBfj",
        "it": "https://music.apple.com/us/album/hope-need-not-be-real-single/1761677018"
    }
</script>

<Album
    name="Hope Need Not Be Real"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd"
    links={links}
    release="2024.08.11"
/>


