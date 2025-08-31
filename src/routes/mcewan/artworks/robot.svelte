<script lang="ts">
    import Artwork from "../artwork.svelte";

    let images = [
        {
            "title": "Overview",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/403/996/large/benjamin-mcewan-render-a.jpg?1575317573"
        },
        {
            "title": "Front Module",
            "url": "https://cdnb.artstation.com/p/assets/images/images/022/403/997/large/benjamin-mcewan-render-b.jpg?1575317577"
        },
        {
            "title": "Leg",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/404/000/large/benjamin-mcewan-render-c.jpg?1575317580"
        },
        {
            "title": "Attachment Module",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/404/030/large/benjamin-mcewan-render-d.jpg?1575317704"
        },
        {
            "title": "Antenna/Radio",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/404/106/large/benjamin-mcewan-render-e.jpg?1575317900"
        },
        {
            "title": "Power Module",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/404/150/large/benjamin-mcewan-render-f.jpg?1575318020"
        },
        {
            "title": "Side View",
            "url": "https://cdna.artstation.com/p/assets/images/images/022/404/194/large/benjamin-mcewan-render-g.jpg?1575318167"
        }
    ]
    let desc = "My result after finishing Creative Shrimp's hard surface modelling course. Details done using the kitbash set that came with the course."
</script>

<Artwork
    name="Study Robot"
    description={desc}
    images={images}
/>


