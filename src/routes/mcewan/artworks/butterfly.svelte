<script lang="ts">
    import Artwork from "../artwork.svelte";

    let images = [
        {
            "title": "Wide Shot",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/874/large/benjamin-mcewan-render-1.jpg?1637525570"
        },
        {
            "title": "Wing Mechanism",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/896/large/benjamin-mcewan-render-3.jpg?1637525541"
        },
        {
            "title": "Thorax Plating",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/866/large/benjamin-mcewan-render-7.jpg?1637525462"
        },
        {
            "title": "Head",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/890/large/benjamin-mcewan-render-2.jpg?1637525508"
        },
        {
            "title": "Wings",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/906/large/benjamin-mcewan-render-4.jpg?1637525572"
        },
        {
            "title": "Legs",
            "url": "https://cdnb.artstation.com/p/assets/images/images/043/522/921/large/benjamin-mcewan-render-5.jpg?1637525593"
        },
        {
            "title": "Abdomen",
            "url": "https://cdna.artstation.com/p/assets/images/images/043/522/936/large/benjamin-mcewan-render-6.jpg?1637525617"
        }
    ]
    let desc = "An experiment in emulating the organic using the mechanical."
</script>

<Artwork
    name="Mechanical Butterfly"
    description={desc}
    images={images}
/>


