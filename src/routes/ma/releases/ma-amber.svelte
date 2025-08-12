<script lang="ts">
    import Album from "../album.svelte";
    import md1 from "../lyrics/heed-the-glow.md?raw"
    import md2 from "../lyrics/cold-hollow.md?raw"
    import md3 from "../lyrics/wearing-my-memories.md?raw"
    import md4 from "../lyrics/now-here-we-are.md?raw"
    import md5 from "../lyrics/cliffside-dance.md?raw"

    let tracks = [
        {
            "name": "Heed the Glow",
            "duration": "2:13",
            "lyrics": md1
        },
        {
            "name": "Cold Hollow",
            "duration": "3:26",
            "lyrics": md2
        },
        {
            "name": "Wearing My Memories",
            "duration": "3:08",
            "lyrics": md3
        },
        {
            "name": "Now Here We Are",
            "duration": "2:27",
            "lyrics": md4
        },
        {
            "name": "Cliffside Dance",
            "duration": "6:16",
            "lyrics": md5
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


