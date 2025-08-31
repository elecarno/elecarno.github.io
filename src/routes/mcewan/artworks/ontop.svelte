<script lang="ts">
    import Artwork from "../artwork.svelte";

    let images = [
        {
            "title": "TVs Scene",
            "url": "https://cdna.artstation.com/p/assets/images/images/039/606/380/large/benjamin-mcewan-shot-7-test-2.jpg?1626378928"
        },
        {
            "title": "Elecarno",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/319/large/benjamin-mcewan-carno-denoised.jpg?1626378805"
        },
        {
            "title": "JayG",
            "url": "https://cdna.artstation.com/p/assets/images/images/039/606/324/large/benjamin-mcewan-jg-denoise.jpg?1626378814"
        },
        {
            "title": "Richjie",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/331/large/benjamin-mcewan-ritchjie-denoise.jpg?1626378833"
        },
        {
            "title": "Yasai",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/391/large/benjamin-mcewan-yasai-denoise.jpg?1626378952"
        },
        {
            "title": "Rush",
            "url": "https://cdna.artstation.com/p/assets/images/images/039/606/340/large/benjamin-mcewan-rush-denoise.jpg?1626378846"
        },
        {
            "title": "Full Table",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/387/large/benjamin-mcewan-table.jpg?1626378942"
        },
        {
            "title": "Low Shot",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/345/large/benjamin-mcewan-shot-1-denoise.jpg?1626378862"
        },
        {
            "title": "High Shot",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/351/large/benjamin-mcewan-shot-2-denoise.jpg?1626378875"
        },
        {
            "title": "Window Shot",
            "url": "https://cdna.artstation.com/p/assets/images/images/039/606/356/large/benjamin-mcewan-shot-3-denoise.jpg?1626378885"
        },
        {
            "title": "Far Shot",
            "url": "https://cdna.artstation.com/p/assets/images/images/039/606/362/large/benjamin-mcewan-shot-4-denoise.jpg?1626378895"
        },
        {
            "title": "Cables",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/369/large/benjamin-mcewan-shot-5.jpg?1626378904"
        },
        {
            "title": "Ground",
            "url": "https://cdnb.artstation.com/p/assets/images/images/039/606/373/large/benjamin-mcewan-shot-6.jpg?1626378915"
        }
    ]
    let desc = "Introductory animated scenes for a collaborative <a href='https://www.youtube.com/watch?v=DsWrZJkiOME'>game montage</a>."
</script>

<Artwork
    name="We're on Top"
    description={desc}
    images={images}
/>


