<script lang="ts">
    import Artwork from "../artwork.svelte";

    let images = [
        {
            "title": "Overview",
            "url": "https://cdna.artstation.com/p/assets/images/images/032/061/602/large/benjamin-mcewan-render-a.jpg?1605367157"
        },
        {
            "title": "Rear",
            "url": "https://cdna.artstation.com/p/assets/images/images/032/061/606/large/benjamin-mcewan-render-b.jpg?1605366884"
        },
        {
            "title": "Cockpit",
            "url": "https://cdnb.artstation.com/p/assets/images/images/032/061/613/large/benjamin-mcewan-render-c.jpg?1605366892"
        },
        {
            "title": "Engines",
            "url": "https://cdnb.artstation.com/p/assets/images/images/032/061/619/large/benjamin-mcewan-render-d.jpg?1605366902"
        },
        {
            "title": "Moon",
            "url": "https://cdnb.artstation.com/p/assets/images/images/032/061/623/large/benjamin-mcewan-render-e.jpg?1605366910"
        }
    ]
    let desc = ""
</script>

<Artwork
    name="Space Fighter"
    description={desc}
    images={images}
/>


