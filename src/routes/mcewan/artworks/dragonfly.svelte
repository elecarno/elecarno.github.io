<script lang="ts">
    import Artwork from "../artwork.svelte";

    let images = [
        {
            "title": "Wide Shot",
            "url": "https://cdnb.artstation.com/p/assets/images/images/053/205/685/large/benjamin-mcewan-wide.jpg?1661684261"
        },
        {
            "title": "Mechanism Closeup",
            "url": "https://cdnb.artstation.com/p/assets/images/images/053/205/673/large/benjamin-mcewan-closeup-6.jpg?1661684192"
        },
        {
            "title": "Mechanism Overview",
            "url": "https://cdnb.artstation.com/p/assets/images/images/053/205/715/large/benjamin-mcewan-closeup-1.jpg?1661684311"
        },
        {
            "title": "Head & Abdomen",
            "url": "https://cdna.artstation.com/p/assets/images/images/053/205/618/large/benjamin-mcewan-closeup-2.jpg?1661684070"
        },
        {
            "title": "Legs",
            "url": "https://cdnb.artstation.com/p/assets/images/images/053/205/629/large/benjamin-mcewan-closeup-3.jpg?1661684101"
        },
        {
            "title": "Stand",
            "url": "https://cdnb.artstation.com/p/assets/images/images/053/205/659/large/benjamin-mcewan-closeup-5.jpg?1661684162"
        }
    ]
    let desc = "Project to expand my techniques and improve upon the presentation and texturing of my models."
</script>

<Artwork
    name="Mechanical Dragonfly"
    description={desc}
    images={images}
/>


