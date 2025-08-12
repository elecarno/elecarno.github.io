<script lang="ts">
    import Album from "../album.svelte";
    let tracks = [
        {
            "name": "Heed the Glow",
            "duration": "2:13"
        },
        {
            "name": "Cold Hollow",
            "duration": "3:26"
        },
        {
            "name": "Wearing My Memories",
            "duration": "3:08"
        },
        {
            "name": "Now Here We Are",
            "duration": "2:27"
        },
        {
            "name": "Cliffside Dance",
            "duration": "6:16"
        }
    ]
    let links = {
        "yt": "https://www.youtube.com/watch?v=pDCGaQRyQvY&list=OLAK5uy_l2Oz7qInZp8Syi1MRw1MU-w8EeKLu_tDg",
        "sp": "https://open.spotify.com/album/5w3KLleq7x2Ow2E6YyjIz6",
        "it": "https://music.apple.com/us/album/an-amber-ballad-ep/1825362685"
    }
</script>

<Album
    name="An Amber Ballad"
    tracklist={tracks}
    cover="https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc"
    links={links}
    release="2025.08.02"
/>


